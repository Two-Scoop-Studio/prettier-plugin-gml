// index.js

import prettier from 'prettier';
import fs from 'fs';
const tests = ["test_simple"];

async function formatFiles() {
  for (let test of tests) {
    const referenceFile = `test/${test}.gml`;
    const formattedFile = `test/${test}.formatted.gml`;

    const referenceCode = fs.readFileSync(referenceFile, "utf8");

    console.log('Unformatted code:', referenceCode);

    const formattedCode = await prettier.format(referenceCode, {
      parser: "gml-parser",
      plugins: ["./index.js"]
    });

    console.log('Type of formattedCode:', typeof formattedCode); // debug line

    await fs.promises.writeFile(formattedFile, formattedCode, "utf8");
  }
}

formatFiles().catch(error => console.error(error));