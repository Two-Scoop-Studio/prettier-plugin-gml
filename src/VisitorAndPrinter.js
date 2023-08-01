export class VisitorAndPrinter extends GameMakerLanguageParserBaseVisitor {
	_tokens;
	_printedCommentGroups = new Set();

	constructor(tokens) {
		super();
		this._tokens = tokens;
	}

	visit(tree) {
		if (tree === null) {
			throw new Error("Tree cannot be null.");
		}
		if (!this.canAttachComments(tree)) {
			return super.visit(tree);
		}
		const trailingComments = this.printTrailingComments(tree);
		const leadingComments = this.printLeadingComments(tree);
		if (trailingComments !== null || leadingComments !== null) {
			return doc.concat(leadingComments, super.visit(tree), trailingComments);
		} else {
			return super.visit(tree);
		}
	}

	#visitFunctionOrStructDeclaration(context) {
		const functionName = this.visit(context.identifier());
		const parameters = this.visit(context?.parameterList());
		const block = this.visit(context.block());
		return doc.concat(functionName, parameters, block);
	}	
	
	visitFunctionDeclaration(context) {
		return this.#visitFunctionOrStructDeclaration(context);
	}
	
	visitStructDeclaration(context) {
		return this.#visitFunctionOrStructDeclaration(context);
	}

	visitProgram(context) {
		if (context.statementList() !== null) {
			return this.visit(context.statementList());
		} else {
			return null;
		}
	}

	visitStatementList(context) {
		const statements = context.statement();
		const parts = [];
		for (let i = 0; i < statements.length; i++) {
			const statement = this.visit(statements[i]);
			if (statement !== null) {
				parts.push(statement);
				parts.push(this.printTrailingComments(statements[i]));
				if (i !== statements.length - 1) {
					parts.push(doc.hardLine);
					if (this.isNextLineBlank(statements[i])) {
						parts.push(doc.hardLine);
					}
				}
			}
		}
		return doc.concat(parts);
	}	

	visitStatement(context) {
		let parts = [];
		let needsSemicolon = false;
		if (context.block() !== null) {
			parts.push(this.visit(context.block()));
		}

		if (needsSemicolon) {
			parts.push(";");
		}
		return doc.concat(parts);
	}

	visitBlock(context) {
		let body;
		if (context.statementList() !== null) {
			body = this.visit(context.statementList());
		} else {
			body = null;
		}
		return doc.concat("{", doc.indent(doc.hardLine, body), doc.hardLine, "}");
	}

	canAttachComments(context) {
		return !(context instanceof GameMakerLanguageParser.ProgramContext || context instanceof GameMakerLanguageParser.StatementListContext);
	}

	visitIfStatement(context) {
		let parts = [this.printSingleClauseStatement("if", context.expression(), context.statement()[0])];
		if (context.statement().length > 1) {
			parts.push(" else ");
			let elseStatement = context.statement()[1];
			if (elseStatement.children[0] instanceof GameMakerLanguageParser.IfStatementContext) {
				parts.push(this.visit(elseStatement));
			} else {
				parts.push(this.printStatementInBlock(elseStatement));
			}
		}
		return doc.concat(parts);
	}

	visitWithStatement(context) {
		return this.printSingleClauseStatement("with", context.expression(), context.statement());
	}

	visitWhileStatement(context) {
		return this.printSingleClauseStatement("while", context.expression(), context.statement());
	}

	visitRepeatStatement(context) {
		return this.printSingleClauseStatement("repeat", context.expression(), context.statement());
	}

	visitAssignmentExpression(context) {
		let operator = context.assignmentOperator().getText();
		if (operator === ":=") {
			operator = "=";
		}
		let expressionContext = context.expressionOrFunction();
		if (context.expressionOrFunction().expression() !== null) {
			expressionContext = context.expressionOrFunction().expression();
			while (expressionContext instanceof GameMakerLanguageParser.ParenthesizedExpressionContext) {
				expressionContext = expressionContext.expression();
			}
		}
		let shouldIndent = false;
		return doc.group(
			doc.group(this.visit(context.lValueExpression())),
			" ",
			operator,
			" ",
			shouldIndent
				? doc.group(doc.indent(this.visit(expressionContext)))
				: doc.group(this.visit(expressionContext))
		);
	}

	printInnerComments(context) {
		let tokens = this._tokens.get(context.start.tokenIndex, context.stop.tokenIndex);
		let parts = [];
		let currentGroup = [];
		let shouldBreak = false;
		for (let i = 0; i < tokens.length; i++) {
			if (tokens[i].type === GameMakerLanguageLexer.WhiteSpaces || tokens[i].type === GameMakerLanguageLexer.LineTerminator || tokens[i].type === GameMakerLanguageLexer.SingleLineComment || tokens[i].type === GameMakerLanguageLexer.MultiLineComment) {
				if (tokens[i].type === GameMakerLanguageLexer.SingleLineComment) {
					shouldBreak = true;
				}
				currentGroup.push(tokens[i]);
			} else {
				if (currentGroup.length > 0 && this._printedCommentGroups.add(currentGroup[0].tokenIndex)) {
					parts.push(this.printCommentsAndWhitespace(currentGroup, false));
				}
				currentGroup = [];
			}
		}
		if (parts.length === 0) {
			return null;
		}
		return parts.join(" ");
	}

	printSingleClauseStatement(keyword, clause, body) {
		while (clause instanceof GameMakerLanguageParser.ParenthesizedExpressionContext) {
			clause = clause.expression();
		}
		return doc.concat(keyword, " (", doc.group(doc.indent(doc.softLine, this.visit(clause))), ") ", this.printStatementInBlock(body));
	}

	printStatementInBlock(statementContext) {
		if (statementContext instanceof GameMakerLanguageParser.StatementContext && statementContext.block() !== null) {
			return this.visit(statementContext.block());
		}
		return doc.concat("{", doc.indent(doc.concat([doc.hardLine, this.visit(statementContext)])), doc.hardLine, "}");
	}

	printCommentsAndWhitespace(tokens, isTrailing, trim = true) {
		let parts = [];
		let firstCommentIndex = -1;
		let lastCommentIndex = -1;
		let consecutiveLineBreaks = 0;
		if (tokens.length === 0) {
			return null;
		}
		for (let i = 0; i < tokens.length; i++) {
			let type = tokens[i].type;
			if (type === GameMakerLanguageLexer.WhiteSpaces) {
				if (i < tokens.length - 1 && tokens[i + 1].type !== GameMakerLanguageLexer.LineTerminator) {
					parts.push(" ");
				}
			} else if (type === GameMakerLanguageLexer.LineTerminator) {
				if (consecutiveLineBreaks < 2 && tokens[i].text.includes("\r")) {
					parts.push(doc.hardLine);
					consecutiveLineBreaks++;
				}
			} else {
				consecutiveLineBreaks = 0;
			}
			if (type === GameMakerLanguageLexer.SingleLineComment || type === GameMakerLanguageLexer.MultiLineComment) {
				let commentType = type === GameMakerLanguageLexer.SingleLineComment ? CommentType.SingleLine : CommentType.MultiLine;
				if (commentType === CommentType.SingleLine) {
					if (isTrailing) {
						parts.push(doc.trailingComment(tokens[i].text, commentType));
					} else {
						parts.push(doc.leadingComment(tokens[i].text, commentType));
					}
				} else {
					parts.push(tokens[i].text);
				}
				if (firstCommentIndex === -1) {
					firstCommentIndex = parts.length;
				}
				lastCommentIndex = parts.length;
			}
		}
		if (firstCommentIndex === -1) {
			return null;
		}
		let trimmedParts = parts.slice(firstCommentIndex - 1, lastCommentIndex - firstCommentIndex + 1);
		return doc.concat(trimmedParts);
	}

	isNextLineBlank(context) {
		let hiddenTokens = this._tokens.getHiddenTokensToRight(context.stop.tokenIndex);
		if (hiddenTokens === null) {
			return false;
		}
		let lineCount = 0;
		for (let i = 0; i < hiddenTokens.length; i++) {
			if (lineCount === 1 && (hiddenTokens[i].type === GameMakerLanguageLexer.SingleLineComment || hiddenTokens[i].type === GameMakerLanguageLexer.MultiLineComment)) {
				return false;
			}
			if (hiddenTokens[i].type === GameMakerLanguageLexer.LineTerminator && !hiddenTokens[i].text.includes("\r")) {
				lineCount++;
			}
		}
		return lineCount >= 2;
	}

	isSeparator(token) {
		return token.type === GameMakerLanguageLexer.Comma || token.type === GameMakerLanguageLexer.SemiColon;
	}

	visitVariableDeclarationList(context) {
		let parts = [context.varModifier().getText(), " "];
		let variableDeclarations = context.variableDeclaration();
		let assignments = [];
		for (let i = 0; i < variableDeclarations.length; i++) {
			assignments.push(this.visit(variableDeclarations[i]));
		}
		let separator = doc.concat(",", doc.line);
		parts.push(doc.group(doc.indent(doc.join(separator, assignments))));
		return doc.concat(parts);
	}

	visitVariableDeclaration(context) {
		if (context.expressionOrFunction() !== null) {
			let parts = [this.visit(context.identifier()), " = ", this.visit(context.expressionOrFunction())];
			return doc.concat(parts);
		} else {
			return this.visit(context.identifier());
		}
	}

	visitCallExpression(context) {
		return this.visit(context.callStatement());
	}

	visitCallStatement(context) {
		let callee;
		if (context.callStatement() !== null) {
			callee = this.visit(context.callStatement());
		} else {
			callee = this.visit(context.callableExpression());
			if (context.callableExpression().lValueExpression() !== null) {
				return callee;
			}
		}
		return doc.concat(callee, this.visit(context.arguments()));
	}

	visitArguments(context) {
		let parts = [];
		if (context.expressionOrFunction() !== null) {
			let expressions = context.expressionOrFunction();
			for (let i = 0; i < expressions.length; i++) {
				let trailingComments = this.printTrailingComments(expressions[i]);
				parts.push(this.visit(expressions[i]));
				if (i !== expressions.length - 1) {
					parts.push(",");
					if (trailingComments !== null) {
						parts.push(trailingComments);
					}
					parts.push(doc.line);
				}
			}
		}
		if (parts.length === 0) {
			let innerComments = this.printInnerComments(context);
			if (innerComments !== null) {
				let lineDoc = containsSingleLineComment ? doc.hardLine : doc.softLine;
				return doc.group("(", doc.indent(lineDoc, innerComments), lineDoc, ")");
			}
			return "()";
		}
		return doc.group("(", doc.indent(doc.softLine, doc.concat(parts)), doc.softLine, ")");
	}

	visitLValueExpression(t) {
		if (null === t) throw Error("LValueExpressionContext cannot be null.");
		let e = t.lValueStartExpression();
		if (null === e) throw Error("LValueStartExpressionContext is unexpectedly null.");
		let i = this.visit(e), n = [i], s = [i], r = [], o = t.lValueStartExpression().getText(), l = o[0].toUpperCase() === o[0], a = o.length <= 4, h = !1, u = null, c = t.lValueChainOperator();
		if (null !== c && c.length > 0) {
			for (let d = 0; d < c.length; d++) {
				let f = this.visit(c[d]);
				n.push(f), h ? (c[d] instanceof GameMakerLanguageParser.CallLValueContext ? r.push(null) : c[d] instanceof GameMakerLanguageParser.MemberDotLValueContext ? d > 0 && c[d - 1] instanceof GameMakerLanguageParser.CallLValueContext ? r.push(doc.hardLine) : r.push(doc.softLine) : d !== 0 && r.push(doc.softLine), r.push(f)) : d < c.length - 1 && c[d] instanceof GameMakerLanguageParser.MemberDotLValueContext && c[d + 1] instanceof GameMakerLanguageParser.CallLValueContext ? (r.push(null), r.push(doc.hardLine), r.push(f), h = !0) : s.push(f);
				u = c[c.length - 1];
			}
		}
		if (null !== t.lValueFinalOperator()) {
			let d = this.visit(t.lValueFinalOperator());
			n.push(d), h ? (t.parent instanceof GameMakerLanguageParser.CallableExpressionContext || t.lValueFinalOperator() instanceof GameMakerLanguageParser.MemberDotLValueFinalContext && u instanceof GameMakerLanguageParser.CallLValueContext ? r.push(doc.hardLine) : r.push(doc.softLine), r.push(d)) : s.push(d);
		}
		if (t.parent instanceof GameMakerLanguageParser.CallableExpressionContext) {
			let d = t.parent;
			for (; !(d instanceof GameMakerLanguageParser.CallStatementContext);) {
				if (null === d) throw Error("Parent context is unexpectedly null during traversal.");
				d = d.parent;
			}
			let f = this.visit(d.arguments());
			n.push(f), h ? r.push(f) : s.push(f);
		}
		if (1 === n.length) return n[0];
		let d = doc.concat(s), f = doc.indent(doc.fill(r));
		return doc.conditionalGroup(doc.concat(n), doc.concat(d, f));
	}

	visitCallLValue(t) {
		return this.visit(t.arguments());
	}

	visitMemberDotLValue(t) {
		let e = this.printInnerComments(t);
		return null !== e ? doc.concat(e, doc.hardLine, ".", this.visit(t.identifier())) : doc.concat(".", this.visit(t.identifier()));
	}

	visitMemberDotLValueFinal(t) {
		return doc.concat(".", this.visit(t.identifier()));
	}

	visitIdentifierLValue(t) {
		return this.visit(t.identifier());
	}

	visitIdentifier(t) {
		return t.getText();
	}

	visitLiteral(context) {
		if (context.arrayLiteral() !== null) {
			return this.visit(context.arrayLiteral());
		}
		if (context.structLiteral() !== null) {
			return this.visit(context.structLiteral());
		}
		if (context.templateStringLiteral() !== null) {
			return this.visit(context.templateStringLiteral());
		}
		if (context.HexIntegerLiteral() !== null || context.BinaryLiteral() !== null) {
			return context.getText();
		}
		return context.getText();
	}

	visitExpressionOrFunction(t) {
		return null !== t.expressionOrFunction() ? this.visit(t.expressionOrFunction()) : null !== t.expression() ? this.visit(t.expression()) : this.visit(t.functionDeclaration());
	}

	visitParenthesizedExpression(t) {
		return doc.group("(", doc.indent(doc.softLine, this.visit(t.expression())), doc.softLine, ")");
	}

	visitLiteralExpression(t) {
		return this.visit(t.literal());
	}

	visitMultiplicativeExpression(t) {
		return this.printBinaryExpressionGroup(t);
	}

	visitAdditiveExpression(t) {
		return this.printBinaryExpressionGroup(t);
	}

	visitCoalesceExpression(t) {
		return this.printBinaryExpressionGroup(t);
	}

	visitBitShiftExpression(t) {
		return this.printBinaryExpressionGroup(t);
	}

	visitLogicalOrExpression(t) {
		return this.printBinaryExpressionGroup(t);
	}

	visitLogicalAndExpression(t) {
		return this.printBinaryExpressionGroup(t);
	}

	visitLogicalXorExpression(t) {
		return this.printBinaryExpressionGroup(t);
	}

	visitEqualityExpression(t) {
		return this.printBinaryExpressionGroup(t);
	}

	visitRelationalExpression(t) {
		return this.printBinaryExpressionGroup(t);
	}

	visitBitAndExpression(t) {
		return this.printBinaryExpressionGroup(t);
	}

	visitBitOrExpression(t) {
		return this.printBinaryExpressionGroup(t);
	}

	visitBitXOrExpression(t) {
		return this.printBinaryExpressionGroup(t);
	}

	printBinaryExpressionGroup(t) {
		let e = this.printBinaryExpression(t);
		return doc.concat(e[0], doc.indent(e.slice(1)));
	}

	printBinaryExpression(t) {
		let e = [], i = t.getRuleContexts(GameMakerLanguageParser.ExpressionContext), n = i[0], s = i[1], r = t.children[1].getText();
		switch (r) {
			case "and":
				r = "&&";
				break;
			case "or":
				r = "||";
				break;
			case "xor":
				r = "^^";
				break;
			case "<>":
				r = "!=";
				break;
			case "mod":
				r = "%";
				break;
			case "not":
				r = "!";
				break;
		}
		console.log(`Node is ${t.constructor.name}, Precedence is ${this.getPrecedence(t)}`), console.log(`Parent node is ${t.parent.constructor.name}, Precedence is ${this.getPrecedence(t.parent)}`);
		let o = t.constructor.name !== t.parent.constructor.name && this.getPrecedence(t) !== this.getPrecedence(t.parent) && n.constructor.name !== t.constructor.name && s.constructor.name !== t.constructor.name, l = t instanceof GameMakerLanguageParser.CoalesceExpressionContext;
		if (l) e.push(this.visit(n)), e.push(doc.line), e.push(r), e.push(" ");
		let a = l ? s : n, h = t instanceof GameMakerLanguageParser.EqualityExpressionContext;
		if (this.isBinaryExpression(a) && this.getPrecedence(t) === this.getPrecedence(a)) e = e.concat(this.printBinaryExpression(a)); else e.push(this.visit(a));
		if (l) return o ? [e[0], doc.group(e.slice(1))] : e;
		let u = doc.concat(h ? " " : doc.line, r, " ", this.visit(s));
		return e.push(o ? doc.group(u) : u), e;
	}

	isBinaryExpression(node) {
		return node instanceof GameMakerLanguageParser.ExpressionContext && !(node instanceof GameMakerLanguageParser.RelationalExpressionContext) && node.getRuleContexts(GameMakerLanguageParser.ExpressionContext).length == 2;
	}

	printLeadingComments(context) {
		let hiddenTokens = this._tokens.getHiddenTokensToLeft(context.start.tokenIndex);
		let leadingSingleLineComment = false;
		if (hiddenTokens != null) {
			for (let i = 0; i < hiddenTokens.length; i++) {
				let type = hiddenTokens[i].type;
				if (type == GameMakerLanguageLexer.WhiteSpaces) {
					continue;
				} else if (type == GameMakerLanguageLexer.SingleLineComment) {
					leadingSingleLineComment = true;
					break;
				}
			}
			if (!this._printedCommentGroups.has(hiddenTokens[0].tokenIndex)) {
				return null;
			}
			let printed = this.printCommentsAndWhitespace(hiddenTokens, false);
			if (printed != null) {
				return leadingSingleLineComment ? doc.concat(printed, doc.hardLine) : doc.concat(printed, " ");
			}
		}
		return null;
	}

	printTrailingComments(context) {
		let index;
		let leadingSeparator = false;
		if (context == null) {
			throw new Error("Context cannot be null.");
		}
		if (context.stop == null) {
			throw new Error("Context.Stop is null, context may be incomplete or incorrectly parsed.");
		}
		if (this.isSeparator(this._tokens.get(context.stop.tokenIndex + 1))) {
			leadingSeparator = true;
			index = context.stop.tokenIndex + 1;
		} else {
			index = context.stop.tokenIndex;
		}
		let hiddenTokens = this._tokens.getHiddenTokensToRight(index);
		if (hiddenTokens != null) {
			for (let i = 0; i < hiddenTokens.length; i++) {
				let type = hiddenTokens[i].type;
				if (type == GameMakerLanguageLexer.WhiteSpaces) {
					continue;
				} else if (type == GameMakerLanguageLexer.LineTerminator) {
					return null;
				} else if (leadingSeparator && type == GameMakerLanguageLexer.MultiLineComment) {
					return null;
				} else {
					break;
				}
			}
			if (!this._printedCommentGroups.has(hiddenTokens[0].tokenIndex)) {
				return null;
			}
			let printed = this.printCommentsAndWhitespace(hiddenTokens, true);
			return printed == null ? null : doc.concat(" ", printed);
		}
		return null;
	}

	getPrecedence(t) {
		return t instanceof GameMakerLanguageParser.BitXorExpressionContext ? 1 :
			t instanceof GameMakerLanguageParser.BitOrExpressionContext ? 2 :
			t instanceof GameMakerLanguageParser.BitAndExpressionContext ? 3 :
			t instanceof GameMakerLanguageParser.RelationalExpressionContext ? 4 :
			t instanceof GameMakerLanguageParser.EqualityExpressionContext ? 5 :
			t instanceof GameMakerLanguageParser.LogicalXorExpressionContext ? 6 :
			t instanceof GameMakerLanguageParser.LogicalAndExpressionContext ? 7 :
			t instanceof GameMakerLanguageParser.LogicalOrExpressionContext ? 8 :
			t instanceof GameMakerLanguageParser.CoalesceExpressionContext ? 9 :
			t instanceof GameMakerLanguageParser.BitShiftExpressionContext ? 10 :
			t instanceof GameMakerLanguageParser.AdditiveExpressionContext ? 11 :
			t instanceof GameMakerLanguageParser.MultiplicativeExpressionContext ? 12 : -1;
	}

}