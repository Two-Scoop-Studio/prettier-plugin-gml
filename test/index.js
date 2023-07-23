// index.js

import prettier from 'prettier';
import fs from 'fs';
const tests = ["test_simple"];

for (let test of tests) {
  const referenceFile = `test/${test}.gml`;
  const formattedFile = `test/${test}.formatted.gml`;

  const referenceCode = fs.readFileSync(referenceFile, "utf8");

  const formattedCode = prettier.format(referenceCode, {
    parser: "gml",
    plugins: ["."]
  });

  fs.writeFileSync(formattedFile, formattedCode, "utf8");
}