class GMLSyntaxNode {
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

class EmptyNode extends GMLSyntaxNode {
    constructor() {
        super();
    }
}

class NodeList extends GMLSyntaxNode {
    constructor(contents) {
        super();
        this.Contents = contents;
    }
}

class Block extends GMLSyntaxNode {
    constructor(body) {
        super();
        this.Body = body;
    }
}

class IfStatement extends GMLSyntaxNode {
    constructor(test, consequent, alternate) {
        super();
        this.Test = test;
        this.Consequent = consequent;
        this.Alternate = alternate;
    }
}

class DoStatement extends GMLSyntaxNode {
    constructor(body, test) {
        super();
        this.Body = body;
        this.Test = test;
    }
}

class WhileStatement extends GMLSyntaxNode {
    constructor(test, body) {
        super();
        this.Test = test;
        this.Body = body;
    }
}

class ForStatement extends GMLSyntaxNode {
    constructor(init, test, update, body) {
        super();
        this.Init = init;
        this.Test = test;
        this.Update = update;
        this.Body = body;
    }
}

class RepeatStatement extends GMLSyntaxNode {
    constructor(test, body) {
        super();
        this.Test = test;
        this.Body = body;
    }
}

class WithStatement extends GMLSyntaxNode {
    constructor(object, body) {
        super();
        this.Object = object;
        this.Body = body;
    }
}

class SwitchStatement extends GMLSyntaxNode {
    constructor(discriminant, cases) {
        super();
        this.Discriminant = discriminant;
        this.Cases = cases;
    }
}

class SwitchCase extends GMLSyntaxNode {
    constructor(test, body) {
        super();
        this.Test = test;
        this.Body = body;
    }
}

class ContinueStatement extends GMLSyntaxNode {
    constructor() {
        super();
    }
}

class BreakStatement extends GMLSyntaxNode {
    constructor() {
        super();
    }
}

class ExitStatement extends GMLSyntaxNode {
    constructor() {
        super();
    }
}

class AssignmentExpression extends GMLSyntaxNode {
    constructor(operator, left, right) {
        super();
        this.Operator = operator;
        this.Left = left;
        this.Right = right;
    }
}

class CallExpression extends GMLSyntaxNode {
    constructor(object, arguments) {
        super();
        this.Object = object;
        this.Arguments = arguments;
    }
}

class MemberIndexExpression extends GMLSyntaxNode {
    constructor(object, property, accessor) {
        super();
        this.Object = object;
        this.Property = property;
        this.Accessor = accessor;
    }
}

class MemberDotExpression extends GMLSyntaxNode {
    constructor(object, property) {
        super();
        this.Object = object;
        this.Property = property;
    }
}

class Literal extends GMLSyntaxNode {
    constructor(text) {
        super();
        this.Text = text;
    }
}

class Identifier extends GMLSyntaxNode {
    constructor(name) {
        super();
        this.Name = name;
    }
}  