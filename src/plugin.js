// plugin.js

import { InputStream, CommonTokenStream, Token } from 'antlr4';
import GameMakerLanguageLexer from './GameMakerLanguageLexer.js';
import GameMakerLanguageParser from './GameMakerLanguageParser.js';
import GameMakerLanguageASTBuilder from './GameMakerLanguageASTBuilder.js';
import { Identifier, Literal, VariableDeclaration } from './nodes.js';

// const OPEN_PAREN = GameMakerLanguageLexer.VOCABULARY.getLiteralName(GameMakerLanguageLexer.OPEN_PAREN);
// const CLOSE_PAREN = GameMakerLanguageLexer.VOCABULARY.getLiteralName(GameMakerLanguageLexer.CLOSE_PAREN);

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

  // Handle arrays of nodes
  if (Array.isArray(node)) {
    const arrayPrintResults = node.map((n, i) => {
      if (n === undefined) {
        console.error(`Node at index ${i} is undefined`);
        return 'UNDEFINED_NODE';
      }
      
      const printResult = path.call(print, i);
      if (printResult === undefined) {
        console.error(`Print result for node at index ${i} is undefined`, n);
        return 'UNDEFINED_PRINT_RESULT';
      }
      return printResult;
    });
  
    console.log(arrayPrintResults);  // Debugging line
  
    return arrayPrintResults.join("\n");
  }  

  if (!node) {
    throw new Error("No node provided!");
  } else if (!node.type) {
    throw new Error(`Node has no type value! Type of node is '${typeof node}', value is '${JSON.stringify(node)}'`);
  }

  // Debug line to print the node type
  console.log(`Attempting to print node of type '${node.type}': ${JSON.stringify(node)}`);

  let result = '';
  switch (node.type) {
    case "Program":
      result = path.map(print, "body").join("\n");
      break;
    case 'VariableDeclaration':
      console.log(`Printing VariableDeclaration node:`, node);
      console.log(`Printing path object:`, path);
      if (!node.name) {
        console.error('VariableDeclaration node has no Name property');
      }
      if (!node.initializer) {
        console.error('VariableDeclaration node has no Initializer property');
      }
      let name = path.call(print, "name");
      let initializer = '';
      if (node.initializer) {
        console.log(`Initializer exists for VariableDeclaration node:`, node.initializer);
        initializer = ` = ${path.call(print, "initializer")}`;
      } else {
        console.log(`No Initializer exists for VariableDeclaration node:`, node);
      }
      result = `${name}${initializer}`;
      console.log(`Print result for node of type VariableDeclaration: ${result}`);
      break;
    case 'VariableDeclarationList':
      if (node.declarations === undefined) {
        throw new Error("node.declarations is undefined for VariableDeclarationList node");
      }
      const declarationsPrinted = node.declarations.map((_, i) =>
        path.call((childPath) => {
          const printed = print(childPath);
          return printed;
        }, "declarations", i)
      );
      result = `${node.modifier} ${declarationsPrinted.join(', ')};`;
      console.log(`Print result for node of type VariableDeclarationList: ${result}`);
      break;
    case 'Block':
      result = `{ ${path.map(print, "body").join('; ')} }`;
      break;
    case 'IfStatement':
      if (!node.hasOwnProperty('alternate')) {
        throw new Error(`Node of type 'IfStatement' is missing 'alternate' property: ${JSON.stringify(node)}`);
      }
      result = `if (${path.call(print, "test")}) ${path.call(print, "consequent")}${node.alternate ? ` else ${path.call(print, "alternate")}` : ''}`;
      break;
    case 'DoStatement':
      result = `do ${path.call(print, "body")} while (${path.call(print, "test")})`;
      break;
    case 'WhileStatement':
      result = `while (${path.call(print, "test")}) ${path.call(print, "body")}`;
      break;
    case 'ForStatement':
      result = `for (${path.call(print, "init")} ${path.call(print, "test")}; ${path.call(print, "update")}) ${path.call(print, "body")}`;
      break;
    case 'RepeatStatement':
      result = `repeat (${path.call(print, "test")}) ${path.call(print, "body")}`;
      break;
    case 'WithStatement':
      result = `with (${path.call(print, "object")}) ${path.call(print, "body")}`;
      break;
    case 'SwitchStatement':
      result = `switch (${path.call(print, "discriminant")}) { ${path.map(print, "cases").join(' ')} }`;
      break;
    case 'FunctionDeclaration':
      result = `function ${path.call(print, "name")}(${path.map(print, "params").join(', ')}) ${path.call(print, "body")}`;
      break;
    case 'Statement':
      result = `${path.call(print, "expression")};`;
      break;
    case 'SwitchCase':
      result = `case ${path.call(print, "test")}: ${path.map(print, "body").join(' ')}`;
      break;
    case 'ContinueStatement':
      result = `continue`;
      break;
    case 'BreakStatement':
      result = `break`;
      break;
    case 'ExitStatement':
      result = `exit`;
      break;
    case 'AssignmentExpression':
      result = `${path.call(print, "Left")} ${node.operator} ${path.call(print, "Right")}`;
      break;
    case 'CallExpression':
      const objectParts = path.map(print, "object").join('.');
      console.log('CallExpression args content:', node.args.contents);
      if (!node.args || !node.args.contents) {
        throw new Error(`Node of type 'CallExpression' is missing 'args' or 'contents' property: ${JSON.stringify(node)}`);
      }
      const argsResult = path.call(print, "args");
      result = `${objectParts}(${argsResult})`;
      break;
    case 'MemberIndexExpression':
      result = `${path.call(print, "object")}[${path.call(print, "property")}]`;
      break;
    case 'MemberDotExpression':
      result = `${path.call(print, "object")}.${path.call(print, "property")}`;
      break;
    case 'Literal':
      result = node.text;
      break;
    case 'Identifier':
      result = node.name;
      break;
    case 'EmptyNode':
      result = '';
      break;
    case 'NodeList':
      // Check if node.contents is defined before trying to access its length
      if(node.contents){
        console.log(`Printing NodeList of size ${node.contents.length}}`);
    
        // Flatten the deeply nested contents array
        const flattenedContents = node.contents.flat(Infinity);
    
        const nonNullContents = flattenedContents.filter(x => x !== null && x !== undefined); // Filter out null values
        result = nonNullContents.map((n, index) => {
          console.log(`Node type: ${n.type}`);
          // return print(n, options, print);
          return path.call(print, "contents", index);
        }).join('\n');
      } else {
        console.error("Node.contents is undefined for NodeList node");
      }
      break;      
    default:
      throw new Error(`Unknown node type '${node.type}' for node: ${JSON.stringify(node)}`);
  }

  // Log the result before returning
  console.log(`Print result for node of type ${node.type}: ${result}`);
  return result;
}