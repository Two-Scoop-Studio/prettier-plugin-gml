const antlr4 = require('antlr4');
const GMLLexer = require('./GameMakerLanguageLexer.js');
const GMLParser = require('./GameMakerLanguageParser.js');
const GMLVisitor = require('./GameMakerLanguageParserVisitor.js');


function walk(node, callback) {
    callback(node);
    for (const key in node) {
        if (node[key] && typeof node[key] === 'object') {
        walk(node[key], callback);
        }
    }
}

function locStart(node) {
    return node.start;
}

function locEnd(node) {
    return node.stop;
}
  
function parse(text) {
    const lexer = new GMLLexer(new antlr4.InputStream(text));
    const tokens = new CommonTokenStream(lexer);
    const parser = new GMLParser(tokens);

    // Assuming GML.g4 has a 'program' rule as the root rule
    const tree = parser.program();

    // Convert the ANTLR parse tree to the AST needed for Prettier
    const visitor = new GMLVisitor();
    const ast = visitor.visit(tree);

    return ast;
}