// testRunner.js

import * as prettier from "prettier";
import fs from 'fs';
import path from 'path';
import url from 'url';

const testsDirectory = './tests/';
const fileEncoding = 'utf8';
const fileExt = '.gml';

// Get the directory name of the current module
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

async function getFilesWithExtension(directory, extension) {
  const files = await fs.promises.readdir(directory);
  return files.filter(file => file.endsWith(extension));
}

async function testFiles() {
  const inputFiles = await getFilesWithExtension(testsDirectory, fileExt);

  for (let inputFile of inputFiles) {
    const baseName = inputFile.slice(0, -4); // remove '.gml' extension
    const outputFile = baseName.replace('.input', '.output') + fileExt;

    const inputCode = await fs.promises.readFile(path.join(testsDirectory, inputFile), fileEncoding);
    const expectedOutput = await fs.promises.readFile(path.join(testsDirectory, outputFile), fileEncoding);

    const formatted = prettier.format(inputCode, {
        parser: "gml-parser",
        plugins: ["./index.js"]
    });

    if (formatted !== expectedOutput) {
      console.error(`Test failed for file ${inputFile}`);
      process.exit(1); // Exit with a failure code
    }
  }

  console.log('All tests passed!');
  process.exit(0); // Exit with a success code
}

testFiles();






