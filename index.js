// index.js

import { parse, preprocess, locStart, locEnd, print } from './src/plugin.js';

export const languages = [
  {
    extensions: [".gml"],
    name: "GML",
    parsers: ["gml-parser"],
    vscodeLanguageIds: ["gml-gms2"],
  },
];

export const parsers = {
  "gml-parser": {
    parse,
    astFormat: "gml-ast",
    locStart,
    locEnd,
    preprocess,
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