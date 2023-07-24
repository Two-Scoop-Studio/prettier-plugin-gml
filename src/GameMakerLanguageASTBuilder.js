import GameMakerLanguageParserVisitor from './GameMakerLanguageParserVisitor.js';

export default class GameMakerLanguageASTBuilder extends GameMakerLanguageParserVisitor {
    
    visitProgram(context) {
        return context.statementList() !== null ? this.visit(context.statementList()) : GMLSyntaxNode.Empty;
    }

    visitStatementList(context) {
        let statements = context.statement();
        let parts = [];
    
        for (let i = 0; i < statements.length; i++) {
            let statement = this.visit(statements[i]);
            if (!(statement instanceof EmptyNode)) {
                parts.push(statement);
            }
        }
    
        return GMLSyntaxNode.List(parts);
    }
    
    visitStatement(context) {
        if (context.block() !== null) return this.visit(context.block());
        if (context.ifStatement() !== null) return this.visit(context.ifStatement());
        if (context.variableDeclarationList() !== null) return this.visit(context.variableDeclarationList());
        if (context.assignmentExpression() !== null) return this.visit(context.assignmentExpression());
        if (context.callStatement() !== null) return this.visit(context.callStatement());
        if (context.iterationStatement() !== null) return this.visit(context.iterationStatement());
        if (context.functionDeclaration() !== null) return this.visit(context.functionDeclaration());
        if (context.switchStatement() !== null) return this.visit(context.switchStatement());
        if (context.enumeratorDeclaration() !== null) return this.visit(context.enumeratorDeclaration());
        if (context.incDecStatement() !== null) return this.visit(context.incDecStatement());
        if (context.withStatement() !== null) return this.visit(context.withStatement());
        if (context.returnStatement() !== null) return this.visit(context.returnStatement());
        if (context.exitStatement() !== null) return this.visit(context.exitStatement());
        if (context.continueStatement() !== null) return this.visit(context.continueStatement());
        if (context.breakStatement() !== null) return this.visit(context.breakStatement());
        if (context.throwStatement() !== null) return this.visit(context.throwStatement());
        if (context.tryStatement() !== null) return this.visit(context.tryStatement());
        if (context.globalVarStatement() !== null) return this.visit(context.globalVarStatement());
        if (context.macroStatement() !== null) return this.visit(context.macroStatement());
        if (context.defineStatement() !== null) return this.visit(context.defineStatement());
        if (context.regionStatement() !== null) return this.visit(context.regionStatement());
    
        return GMLSyntaxNode.Empty;
    }
    
    visitBlock(context) {
        let body = context.statementList() !== null ? this.visit(context.statementList()) : GMLSyntaxNode.Empty;
        return new Block(body);
    }
    
    visitIfStatement(context) {
        let test = this.visit(context.expression());
        let consequent = this.visit(context.statement()[0]);
        let alternate = context.statement().length > 1 ? this.visit(context.statement()[1]) : GMLSyntaxNode.Empty;
        return new IfStatement(test, consequent, alternate);
    }
    
    visitDoStatement(context) {
        let body = this.visit(context.statement());
        let test = this.visit(context.expression());
        return new DoStatement(body, test);
    }
    
    visitWhileStatement(context) {
        let test = this.visit(context.expression());
        let body = this.visit(context.statement());
        return new WhileStatement(test, body);
    }
    
    visitForStatement(context) {
        let init = context.variableDeclarationList() !== null ? this.visit(context.variableDeclarationList()) : context.assignmentExpression() !== null ? this.visit(context.assignmentExpression()) : GMLSyntaxNode.Empty;
        let test = context.expression() !== null ? this.visit(context.expression()) : GMLSyntaxNode.Empty;
        let update = context.statement().length > 1 ? this.visit(context.statement()[0]) : GMLSyntaxNode.Empty;
        let body = context.statement().length > 1 ? this.visit(context.statement()[1]) : this.visit(context.statement()[0]);
    
        return new ForStatement(init, test, update, body);
    }
    
    visitWithStatement(context) {
        let object = this.visit(context.expression());
        let body = this.visit(context.statement());
        return new WithStatement(object, body);
    }
    
    visitSwitchStatement(context) {
        let discriminant = this.visit(context.expression());
        let cases = this.visit(context.caseBlock());
        return new SwitchStatement(discriminant, cases);
    }
    
    visitCaseBlock(context) {
        let caseClauses = [];
        if (context.caseClauses() !== null) {
            let cases = context.caseClauses();
            for (let caseList of cases) {
                let node = this.visit(caseList);
                if (node instanceof NodeList) {
                    caseClauses.push(...node.Contents);
                }
            }
        }
        if (context.defaultClause() !== null) {
            caseClauses.push(this.visit(context.defaultClause()));
        }
        return GMLSyntaxNode.List(caseClauses);
    }
    
    visitCaseClauses(context) {
        let parts = [];
        let caseClauses = context.caseClause();
        for (let caseClause of caseClauses) {
            parts.push(this.visit(caseClause));
        }
        return GMLSyntaxNode.List(parts);
    }
    
    visitCaseClause(context) {
        let test = this.visit(context.expression());
        let body = context.statementList() !== null ? this.visit(context.statementList()) : GMLSyntaxNode.Empty;
        return new SwitchCase(test, body);
    }
    
    visitDefaultClause(context) {
        let body = context.statementList() !== null ? this.visit(context.statementList()) : GMLSyntaxNode.Empty;
        return new SwitchCase(GMLSyntaxNode.Empty, body);
    }
    
    visitContinueStatement(context) {
        return new ContinueStatement();
    }
    
    visitBreakStatement(context) {
        return new BreakStatement();
    }
    
    visitExitStatement(context) {
        return new ExitStatement();
    }
    
    visitAssignmentExpression(context) {
        let operator = context.assignmentOperator().GetText();
        if (operator == ":=") {
            operator = "=";
        }
        let left = this.visit(context.lValueExpression());
        let right = this.visit(context.expressionOrFunction());
        return new AssignmentExpression(operator, left, right);
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
        return new Literal(context.GetText());
    }
    
    visitLiteralExpression(context) {
        return this.visit(context.literal());
    }
    
    visitExpressionOrFunction(context) {
        if (context.expression() !== null) {
            return this.visit(context.expression());
        }
        if (context.functionDeclaration() !== null) {
            return this.visit(context.functionDeclaration());
        }
        if (context.expressionOrFunction() !== null) {
            return this.visit(context.expressionOrFunction());
        }
        return GMLSyntaxNode.Empty;
    }
    
    visitLValueExpression(context) {
        let object = this.visit(context.lValueStartExpression());
        if (context.lValueChainOperator()?.length > 0) {
            let ops = context.lValueChainOperator();
            for (let op of ops) {
                let node = this.visit(op);
                if (node instanceof IHasObject) {
                    node.Object = object;
                }
                object = node;
            }
        }
    
        return object;
    }
    
    visitCallExpression(context) {
        return this.visit(context.callStatement());
    }
    
    visitArguments(context) {
        let parts = [];
        let args = context.expressionOrFunction();
        for (let arg of args) {
            parts.push(this.visit(arg));
        }
        return GMLSyntaxNode.List(parts);
    }
    
    visitCallStatement(context) {
        let object = GMLSyntaxNode.Empty;
    
        if (context.callableExpression() !== null) {
            object = this.visit(context.callableExpression());
        }
    
        if (context.callStatement() !== null) {
            object = this.visit(context.callStatement());
        }
    
        if(context.arguments() !== null) {
            return new CallExpression(object, this.visit(context.arguments()));
        }
    
        return object;
    }
    
    visitCallLValue(context) {
        return this.visit(context.arguments());
    }
    
    visitMemberDotLValue(context) {
        let property = this.visit(context.identifier());
        return new MemberDotExpression(GMLSyntaxNode.Empty, property);
    }
    
    visitMemberDotLValueFinal(context) {
        let property = this.visit(context.identifier());
        return new MemberDotExpression(GMLSyntaxNode.Empty, property);
    }
    
    visitMemberIndexLValue(context) {
        let property = this.visit(context.expressionSequence());
        let accessor = context.accessor().GetText();
        return new MemberIndexExpression(GMLSyntaxNode.Empty, property, accessor);
    }
    
    visitMemberIndexLValueFinal(context) {
        let property = this.visit(context.expressionSequence());
        let accessor = context.accessor().GetText();
        return new MemberIndexExpression(GMLSyntaxNode.Empty, property, accessor);
    }
    
    visitExpressionSequence(context) {
        let parts = [];
        for (let expression of context.expression()) {
            parts.push(this.visit(expression));
        }
        return new NodeList(parts);
    }
    
    visitParenthesizedExpression(context) {
        let content = context.expression();
        while (content instanceof GameMakerLanguageParser.ParenthesizedExpressionContext) {
            content = content.expression();
        }
    
        return this.visit(content);
    }
    
    visitIdentifierLValue(context) {
        return this.visit(context.identifier());
    }
    
    visitIdentifier(context) {
        return new Identifier(context.GetText());
    }

}    