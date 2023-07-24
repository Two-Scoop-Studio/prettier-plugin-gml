// plugin.js

import { InputStream, CommonTokenStream, Token } from 'antlr4';
import GameMakerLanguageLexer from './GameMakerLanguageLexer.js';
import GameMakerLanguageParser from './GameMakerLanguageParser.js';
import GameMakerLanguageASTBuilder from './GameMakerLanguageASTBuilder.js';

// function walk(node, callback) {
//     callback(node);
//     for (const key in node) {
//         if (node[key] && typeof node[key] === 'object') {
//         walk(node[key], callback);
//         }
//     }
// }

export function locStart(node) {
  return node.start;
}

export function locEnd(node) {
  return node.stop;
}

// Print the tokens for debugging
function printTokens(lexer) {
  lexer.reset();
  let token;
  console.log("Tokens:");
  while ((token = lexer.nextToken()).type !== Token.EOF) {
    try {
      const tokenTypeName = GameMakerLanguageLexer.symbolicNames[token.type];
      console.log(`Token: ${token.toString()} (type: ${tokenTypeName})`);
    } catch (error) {
      console.error(`Error processing token: ${token.toString()}. Error: ${error.message}`);
    }
  }
}

export function parse(text, options) {
  try {
    // Create the lexer and parser
    const inputStream = new InputStream(text);
    const lexer = new GameMakerLanguageLexer(inputStream);
    const tokens = new CommonTokenStream(lexer);
    const parser = new GameMakerLanguageParser(tokens);

    // Parse the input
    const tree = parser.program();

    printTokens(lexer);

    // Print out the tree for debugging
    console.log('Parse tree:', tree.toStringTree(parser.ruleNames));

    // Convert the ANTLR parse tree to the AST needed for Prettier
    const builder = new GameMakerLanguageASTBuilder();
    const ast = builder.visit(tree);

    // Print out the AST for debugging
    console.log('AST:', JSON.stringify(ast, null, 2));

    return ast;
  } catch (error) {
    console.error('Error during parsing:', error);
  }
}


export function preprocess(text, options) {

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

export function print(path, options, print) {
  const node = path.getValue();

  console.log(node); // Debug line to print the node type

  if (!node) {
    throw new Error("No node provided!");
  }

  switch (node.type) {
    case "Program":
      // For a 'Program' node, print all its body statements
      return path.map(print, "body").join("\n");
    case "Identifier":
      // For an 'Identifier' node, return its name
      return node.name;
    // Add more cases for each type of node in your AST
    default:
      console.log(JSON.stringify(node));
      throw new Error(`Unknown node type: ${node.type}`);
  }
}
