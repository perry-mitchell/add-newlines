const path = require("path");
const { readFileSync } = require("fs");

const execa = require("execa").sync;
const rimraf = require("rimraf").sync;

const NEWLINESEXE = path.resolve(__dirname, "../../source/index.js");
const RESOURCES = path.resolve(__dirname, "../resources");
const TEMPDIR = path.resolve(__dirname, "../temp");
const FILE_NL = path.resolve(TEMPDIR, "./hasnewlines.txt");
const FILE_NNL = path.resolve(TEMPDIR, "./nonewlines.xml");

describe("cli", function() {

    function runNewLines() {
        execa(NEWLINESEXE, [path.join(TEMPDIR, "/*.*")]);
    }

    beforeEach(function() {
        rimraf(TEMPDIR);
        execa("cp", ["-r", RESOURCES, TEMPDIR]);
    });

    afterEach(function() {
        rimraf(TEMPDIR);
    });

    it("keeps new lines that already exist", function() {
        runNewLines();
        const contents = readFileSync(FILE_NL, "utf8");
        expect(contents).to.equal("Somefile contents.\n");
    });

    it("adds new lines when they do not exist", function() {
        runNewLines();
        const contents = readFileSync(FILE_NNL, "utf8");
        expect(contents).to.equal("<testfile></testfile>\n");
    });

});
