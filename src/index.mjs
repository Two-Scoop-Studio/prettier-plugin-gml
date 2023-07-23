import { parse, preprocess, locStart, locEnd } from './plugin.js';

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