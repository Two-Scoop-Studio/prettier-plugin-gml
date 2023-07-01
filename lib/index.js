const { parsers } = require("prettier/parser-babel");
const parser = parsers.babel;

const {
  doc: {
    builders: { concat },
  },
} = require("prettier");

const languages = [
  {
    extensions: [".gml"],
    name: "GML",
    parsers: ["gml-parse"],
    vscodeLanguageIds: ["gml-gms2"],
  },
];

const gmlParsers = {
  "gml-parse": {
    ...parser,
    parse(text, parsers, options) {
      const ast = parser.parse(text, {
        ...options,
        comments: true,
      });
      // The AST can be modified here for Game Maker-specific formatting
      // Alternatively, a pre-processing step can be added

      return ast;
    },
    preprocess(text, options) {
      // Because we're using the JavaScript parser to parse our GML code, we need
      // to make a few minor adjustmenets so that the parser can handle GML specifics
      if (parser.preprocess) {
        text = parser.preprocess(text, options);
      }
      // Temporarily comment out region blocks until post-processing
      text = text.replace(/(#region .*)/g, "//##$1");
      text = text.replace(/(#endregion)/g, "//##$1");

      // Move inline comments in 'if' statements to a new line
      text = text.replace(/if\s*([^{\n]+)(\/\/[^\n]*)\s*\{/g, "$2\nif ($1) {");


      // Fix 'if' statements without parentheses
      text = text.replace(/if\s*([^{\n]+?)\s*(\/\/[^\n]*|)\{/g, "if ($1) $2{");



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
      return text;
    },
    // For custom printing, change 'estree' to 'gml-tree' and add a printer
    astFormat: "estree",
  },
};

module.exports = {
  languages,
  parsers: gmlParsers,
};
