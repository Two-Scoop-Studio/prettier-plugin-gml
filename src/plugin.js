// plugin.js

import { InputStream, CommonTokenStream, Token } from 'antlr4';
import GameMakerLanguageLexer from './GameMakerLanguageLexer.js';
import GameMakerLanguageParser from './GameMakerLanguageParser.js';
import GameMakerLanguageASTBuilder from './GameMakerLanguageASTBuilder.js';

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
      throw error;
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
    console.log('Generated AST:', JSON.stringify(ast, null, 2));

    return ast;
  } catch (error) {
    console.error('Error during parsing:', error.stack);
    throw error;
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

  if (!node) {
    throw new Error("No node provided!");
  } else if (!node.type) {
    throw new Error("Node has no type!");
  }

  // Debug line to print the node type
  console.log(`Attempting to print node of type ${node.type}: ${node}`);

  switch (node.type) {
    case "Program":
      // For a 'Program' node, print all its body statements
      return path.map(print, "body").join("\n");
    case 'Block':
      return `{ ${node.Body.map(print).join('; ')} }`;
    case 'IfStatement':
      return `if (${print(node.Test)}) ${print(node.Consequent)} ${node.Alternate ? `else ${print(node.Alternate)}` : ''}`;
    case 'DoStatement':
      return `do ${print(node.Body)} while (${print(node.Test)})`;
    case 'WhileStatement':
      return `while (${print(node.Test)}) ${print(node.Body)}`;
    case 'ForStatement':
      return `for (${print(node.Init)} ${print(node.Test)}; ${print(node.Update)}) ${print(node.Body)}`;
    case 'RepeatStatement':
      return `repeat (${print(node.Test)}) ${print(node.Body)}`;
    case 'WithStatement':
      return `with (${print(node.Object)}) ${print(node.Body)}`;
    case 'SwitchStatement':
      return `switch (${print(node.Discriminant)}) { ${node.Cases.map(print).join(' ')} }`;
    case 'SwitchCase':
      return `case ${print(node.Test)}: ${node.Body.map(print).join(' ')}`;
    case 'ContinueStatement':
      return `continue`;
    case 'BreakStatement':
      return `break`;
    case 'ExitStatement':
      return `exit`;
    case 'AssignmentExpression':
      return `${print(node.Left)} ${node.Operator} ${print(node.Right)}`;
    case 'CallExpression':
      return `${print(node.Object)}(${node.Arguments.map(print).join(', ')})`;
    case 'MemberIndexExpression':
      return `${print(node.Object)}[${print(node.Property)}]`;
    case 'MemberDotExpression':
      return `${print(node.Object)}.${print(node.Property)}`;
    case 'Literal':
      return node.Text;
    case 'Identifier':
      return node.Name;
    case 'EmptyNode':
      return '';
    case 'NodeList':
      return node.Contents.map(print).join(', ');
    default:
      throw new Error(`Unknown node type: ${node.type} for node ${JSON.stringify(node)}`);
  }
}