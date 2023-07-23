const { parsers } = require("prettier/parser-babel");
const parser = parsers.babel;
const gmlParser = require("gml-pegjs");

const {
  doc: {
    builders: { concat },
  },
} = require("prettier");

export const languages = [
  {
    extensions: [".gml"],
    name: "GML",
    parsers: ["gml-parse"],
    vscodeLanguageIds: ["gml-gms2"],
  },
];

export const parsers = {
  "gml-parse": {
    ...parser,
    parse(text, parsers, options) {
      const ast = gmlParser.parse(text);

      // The AST can be modified here for Game Maker-specific formatting
      // Alternatively, a pre-processing step can be added
      console.log(ast);
      return ast;
    },
    preprocess(text, options) {
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
    },
    astFormat: "gml-ast",
  },
};

export const printers = {
  "gml-ast": {
    print,
    // Optional methods...
  },
};

export const options = {
  // Custom options...
};
