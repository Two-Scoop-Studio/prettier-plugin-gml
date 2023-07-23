const https = require("https");
var fs = require("fs");
var bin = "./bin";

if (!fs.existsSync(bin)) {
  fs.mkdirSync(bin);
}

const file = fs.createWriteStream("bin/antlr-4.13.0-complete.jar");
https.get("https://www.antlr.org/download/antlr-4.13.0-complete.jar", response =>
  response.pipe(file)
);