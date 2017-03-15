"use strict";

const fs = require("fs");

const chalk = require("chalk");
const glob = require("glob");
const isFile = require("is-file");

const argv = require("minimist")(process.argv.slice(2));

// **
// ** Defaults
// **

const NEWLINE_EOF = /(\r\n|\n)+$/;

let newlineChar = "\n";

// **
// ** Init
// **

let files = (argv._ || [])
    .map(pattern => glob.sync(pattern))
    .reduce(function(collection, globbed) {
        return [...collection, ...globbed];
    }, [])
    .filter(filename => isFile(filename));

// **
// ** Processing
// **

if (files.length <= 0) {
    console.log("No files to process");
    process.exit(1);
}

console.log(chalk.underline("Processing files:"));
files.forEach(function(filename) {
    let contents = fs.readFileSync(filename, "utf8");
    let newContents = contents.replace(NEWLINE_EOF, newlineChar);
    if (contents !== newContents) {
        console.log(chalk.yellow(`  ${filename}`));
        fs.writeFileSync(filename, newContents, { encoding: "utf8" });
    } else {
        console.log(chalk.green(`  ${filename}`));
    }
});
console.log("Done.");
