// plugin.js

import antlr4 from 'antlr4';
import GMLLexer from './GameMakerLanguageLexer.js';
import GMLParser from './GameMakerLanguageParser.js';
import GMLVisitor from './GameMakerLanguageParserVisitor.js';

function walk(node, callback) {
    callback(node);
    for (const key in node) {
        if (node[key] && typeof node[key] === 'object') {
        walk(node[key], callback);
        }
    }
}

export function locStart(node) {
    return node.start;
}

export function locEnd(node) {
    return node.stop;
}
  
export function parse(text, options) {
    const lexer = new GMLLexer(new antlr4.InputStream(text));
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new GMLParser(tokens);

    // Assuming GML.g4 has a 'program' rule as the root rule
    const tree = parser.program();

    // Convert the ANTLR parse tree to the AST needed for Prettier
    const visitor = new GMLVisitor();
    const ast = visitor.visit(tree);

    console.log(ast);

    return ast;
}

export function preprocess(text, options) {
    // Because we're using the JavaScript parser to parse our GML code, we need
    // to make a few minor adjustmenets so that the parser can handle GML specifics
    if (parser.preprocess) {
      text = parser.preprocess(text, options);
    }

    // Define the GML keywords that require parentheses
    const keywords = ['if', 'while', 'repeat'];

    // Loop through each keyword and replace the corresponding GML statements
    for (const keyword of keywords) {
      // Move inline comments to a new line and add parentheses
      const regex = new RegExp(`(${keyword})\\s*([^\\/\\{\\n]+)(\\/\\/[^\\n]*|)\\s*\\{`, 'g');
      text = text.replace(regex, `$3\n$1 ($2) {`);
    }

    // Define the words to replace
    const replacements = {
      "@func": "@function",
      "@desc": "@description",
      // Add more replacements here as needed
    };

    // Loop through each replacement and apply it
    for (let [oldWord, newWord] of Object.entries(replacements)) {
      const regex = new RegExp(`(\/\\*\\*[^*]*\\*+([^/*][^*]*\\*+)*|\\s*\/\/\/)\\s*${oldWord}\\b`, "g");
      text = text.replace(regex, `$1 ${newWord}`);
    }

    // Add space to inline comment
    text = text.replace(/\/\/(?=[^\/\s])/g, '// ');

    // Added step: Remove parentheses from @function annotation
    text = text.replace(/(@function)\s*([a-zA-Z_$][0-9a-zA-Z_$]*)\(\)/g, '$1 $2');

    return text;
}