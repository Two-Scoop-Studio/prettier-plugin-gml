const prettier = require("prettier");
const fs = require("fs");
const tests = ["AllInOne"];

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