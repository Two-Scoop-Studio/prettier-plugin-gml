export class GMLSyntaxNode {
    constructor() {
        //this.StartIndex = 0;
        //this.EndIndex = 0;
    }

    get Type() {
        return this.constructor.name;
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
        this.Contents = contents;
    }
}

export class Block extends GMLSyntaxNode {
    constructor(body) {
        super();
        this.Body = body;
    }
}

export class IfStatement extends GMLSyntaxNode {
    constructor(test, consequent, alternate) {
        super();
        this.Test = test;
        this.Consequent = consequent;
        this.Alternate = alternate;
    }
}

export class DoStatement extends GMLSyntaxNode {
    constructor(body, test) {
        super();
        this.Body = body;
        this.Test = test;
    }
}

export class WhileStatement extends GMLSyntaxNode {
    constructor(test, body) {
        super();
        this.Test = test;
        this.Body = body;
    }
}

export class ForStatement extends GMLSyntaxNode {
    constructor(init, test, update, body) {
        super();
        this.Init = init;
        this.Test = test;
        this.Update = update;
        this.Body = body;
    }
}

export class RepeatStatement extends GMLSyntaxNode {
    constructor(test, body) {
        super();
        this.Test = test;
        this.Body = body;
    }
}

export class WithStatement extends GMLSyntaxNode {
    constructor(object, body) {
        super();
        this.Object = object;
        this.Body = body;
    }
}

export class SwitchStatement extends GMLSyntaxNode {
    constructor(discriminant, cases) {
        super();
        this.Discriminant = discriminant;
        this.Cases = cases;
    }
}

export class SwitchCase extends GMLSyntaxNode {
    constructor(test, body) {
        super();
        this.Test = test;
        this.Body = body;
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

export class AssignmentExpression extends GMLSyntaxNode {
    constructor(operator, left, right) {
        super();
        this.Operator = operator;
        this.Left = left;
        this.Right = right;
    }
}

export class CallExpression extends GMLSyntaxNode {
    constructor(object, args) {
        super();
        this.Object = object;
        this.Arguments = args;
    }
}

export class MemberIndexExpression extends GMLSyntaxNode {
    constructor(object, property, accessor) {
        super();
        this.Object = object;
        this.Property = property;
        this.Accessor = accessor;
    }
}

export class MemberDotExpression extends GMLSyntaxNode {
    constructor(object, property) {
        super();
        this.Object = object;
        this.Property = property;
    }
}

export class Literal extends GMLSyntaxNode {
    constructor(text) {
        super();
        this.Text = text;
    }
}

export class Identifier extends GMLSyntaxNode {
    constructor(name) {
        super();
        this.Name = name;
    }
}  