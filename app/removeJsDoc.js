const fs = require("fs");
const path = require("path");


function removeJSDoc(inputFile, outputFile) {
  // Read the file content
  const fileContent = fs.readFileSync(inputFile, 'utf8');

  // Regular expression to match JSDoc comments: /** comment */
  const jsDocRegex = /\/\*\*[\s\S]*?\*\//g;

  // Remove all JSDoc comments
  const updatedContent = fileContent.replace(jsDocRegex, '');

  // Write the updated content to a new file or overwrite the original one
  fs.writeFileSync(outputFile, updatedContent, 'utf8');

  console.log(`JSDoc comments removed and saved to: ${outputFile}`);
}

// Example usage
const inputFilePath = path.join(__dirname, './src/kube/services/CoreV1Service.ts');  // Adjust the path to your TypeScript file
const outputFilePath = path.join(__dirname, 'output.ts'); // Adjust the path for the output file

removeJSDoc(inputFilePath, outputFilePath);
