const fs = require("fs");
const path = require("path");

const repoDir = __dirname;
const inputPath = path.join(repoDir, "line.txt");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = path.join(outputDir, "entry.txt");

function validateText(text) {
  if (text.length === 0) {
    throw new Error("line.txt is empty");
  }
  if (text.length > 600) {
    throw new Error("line.txt exceeds 600 characters: " + text.length);
  }
}

const text = fs.readFileSync(inputPath, "utf8");

validateText(text);

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, text, "utf8");
