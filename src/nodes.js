export class GMLSyntaxNode {
    constructor() {
        this.type = this.constructor.name;
        //this.StartIndex = 0;
        //this.EndIndex = 0;
    }

    static get Empty() {
        return new EmptyNode();
    }

    static List(...contents) {
        return new NodeList(contents);
    }

    static ListFromArray(contents) {
        return new NodeList(contents);
    }
}

export class EmptyNode extends GMLSyntaxNode {
    constructor() {
        super();
    }
}

export class NodeList extends GMLSyntaxNode {
    constructor(contents) {
        super();
        this.contents = Array.isArray(contents) ? contents : [contents];
    }
}

export class Block extends GMLSyntaxNode {
    constructor(body) {
        super();
        this.body = body;
    }
}

export class IfStatement extends GMLSyntaxNode {
    constructor(test, consequent, alternate) {
        super();
        this.test = test;
        this.consequent = consequent;
        this.alternate = alternate;
    }
}

export class DoStatement extends GMLSyntaxNode {
    constructor(body, test) {
        super();
        this.body = body;
        this.test = test;
    }
}

export class WhileStatement extends GMLSyntaxNode {
    constructor(test, body) {
        super();
        this.test = test;
        this.body = body;
    }
}

export class ForStatement extends GMLSyntaxNode {
    constructor(init, test, update, body) {
        super();
        this.init = init;
        this.test = test;
        this.update = update;
        this.body = body;
    }
}

export class RepeatStatement extends GMLSyntaxNode {
    constructor(test, body) {
        super();
        this.test = test;
        this.body = body;
    }
}

export class WithStatement extends GMLSyntaxNode {
    constructor(object, body) {
        super();
        this.object = object;
        this.body = body;
    }
}

export class SwitchStatement extends GMLSyntaxNode {
    constructor(discriminant, cases) {
        super();
        this.discriminant = discriminant;
        this.cases = cases;
    }
}

export class SwitchCase extends GMLSyntaxNode {
    constructor(test, body) {
        super();
        this.test = test;
        this.body = body;
    }
}

export class ContinueStatement extends GMLSyntaxNode {
    constructor() {
        super();
    }
}

export class BreakStatement extends GMLSyntaxNode {
    constructor() {
        super();
    }
}

export class ExitStatement extends GMLSyntaxNode {
    constructor() {
        super();
    }
}

export class VariableDeclaration extends GMLSyntaxNode {
    constructor(name, initializer) {
        super();
        this.name = name;
        this.initializer = initializer;
    }
}

export class VariableDeclarationList extends GMLSyntaxNode {
    constructor(modifier, declarations) {
        super();
        this.modifier = modifier;
        this.declarations = Array.isArray(declarations) ? declarations : [declarations];
    }
}

export class AssignmentExpression extends GMLSyntaxNode {
    constructor(operator, left, right) {
        super();
        this.operator = operator;
        this.left = left;
        this.right = right;
    }
}

export class CallExpression extends GMLSyntaxNode {
    constructor(object, args) {
        super();
        this.object = object;
        this.args = args;
    }
}

export class MemberIndexExpression extends GMLSyntaxNode {
    constructor(object, property, accessor) {
        super();
        this.object = object;
        this.property = property;
        this.accessor = accessor;
    }
}

export class MemberDotExpression extends GMLSyntaxNode {
    constructor(object, property) {
        super();
        this.object = object;
        this.property = property;
    }
}

export class Literal extends GMLSyntaxNode {
    constructor(text) {
        super();
        this.text = text;
    }
}

export class Identifier extends GMLSyntaxNode {
    constructor(name) {
        super();
        this.name = name;
    }
}  