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
  console.log(`Attempting to print node of type '${node.type}': ${JSON.stringify(node)}`);

  let result = '';
  switch (node.type) {
    case "Program":
      result = path.map(print, "body").join("\n");
      break;
    case 'Block':
      result = `{ ${path.map(print, "Body").join('; ')} }`;
      break;
    case 'IfStatement':
      result = `if (${path.call(print, "Test")}) ${path.call(print, "Consequent")}${node.Alternate ? ` else ${path.call(print, "Alternate")}` : ''}`;
      break;
    case 'DoStatement':
      result = `do ${print(node.Body)} while (${print(node.Test)})`;
      break;
    case 'WhileStatement':
      result = `while (${print(node.Test)}) ${print(node.Body)}`;
      break;
    case 'ForStatement':
      result = `for (${print(node.Init)} ${print(node.Test)}; ${print(node.Update)}) ${print(node.Body)}`;
      break;
    case 'RepeatStatement':
      result = `repeat (${print(node.Test)}) ${print(node.Body)}`;
      break;
    case 'WithStatement':
      result = `with (${print(node.Object)}) ${print(node.Body)}`;
      break;
    case 'SwitchStatement':
      result = `switch (${print(node.Discriminant)}) { ${node.Cases.map(print).join(' ')} }`;
      break;
    case 'SwitchCase':
      result = `case ${print(node.Test)}: ${node.Body.map(print).join(' ')}`;
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
      result = `${print(node.Left)} ${node.Operator} ${print(node.Right)}`;
      break;
    // case 'CallExpression':
    //   // result = `${print(node.Object)}(${node.Arguments.map(print).join(', ')})`;
    //   const objectParts = node.Object.map(print).join('.');
    //   // const args = node.Arguments.Contents[0].map(print).join(', ');
    //   const args = node.Arguments.Contents.map(subArr => subArr.map(print).join(' ')).join(', ');
    //   result = `${objectParts}(${args})`;
    //   break;
    case 'CallExpression':
      const objectParts = node.Object.map(print).join('.');
      const args = node.Arguments.Contents ? node.Arguments.Contents.flat().map(print).join(', ') : [];
      result = `${objectParts}(${args})`;
      break;
    case 'MemberIndexExpression':
      result = `${print(node.Object)}[${print(node.Property)}]`;
      break;
    case 'MemberDotExpression':
      result = `${print(node.Object)}.${print(node.Property)}`;
      break;
    case 'Literal':
      result = node.Text;
      break;
    case 'Identifier':
      result = node.Name;
      break;
    case 'EmptyNode':
      result = '';
      break;
    case 'NodeList':
      const flattenedContents = node.Contents.flat(Infinity); // Flatten array to any depth
      const nonNullContents = flattenedContents.filter(x => x !== null); // Filter out null values
      // result = nonNullContents.map(n => path.call(print, n)).join('\n');

      console.log(`Printing NodeList of size ${nonNullContents.length}}`);
      result = nonNullContents.map((n, index) => {
        console.log(`Node #${index}:`, n);
        const printed = path.call(print, n);
        console.log(`Printed Node #${index}:`, printed);
        return printed;
      }).join('\n');
      break;      
    default:
      throw new Error(`Unknown node type '${node.type}' for node: ${JSON.stringify(node)}`);
  }

  // Log the result before returning
  console.log(`Print result for node of type ${node.type}: ${result}`);
  return result;
}
