# Add Newlines
Add newlines to a batch of files, if they aren't already there

[![Build Status](https://travis-ci.org/perry-mitchell/add-newlines.svg?branch=master)](https://travis-ci.org/perry-mitchell/add-newlines)

## About
This command-line utility is designed to scrape a list of files to analyse their new line characters. It replaces invalid new-line formats at the end of each file with a single form.

Install it globally to be able to use it anywhere:

```shell
npm install -g add-newlines

# run with addnl:
addnl items/*.*
```

Or locally to use within `package.json` scripts or from within `node_modules/.bin/`:

```shell
npm install add-newlines --save-dev
```

_package.json:_

```json
{
    "scripts": {
        "newlines": "addnl source/**/*.js"
    }
}
```

## Usage
Install the cli globally or locally, and use the `addnl` executable to specify a list of files:

```shell
addnl source/**/*.js
```
