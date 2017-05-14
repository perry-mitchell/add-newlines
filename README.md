# Add Newlines
Add newlines to a batch of files, if they aren't already there

[![Build Status](https://travis-ci.org/perry-mitchell/add-newlines.svg?branch=master)](https://travis-ci.org/perry-mitchell/add-newlines)

## About
This command-line utility is designed to scrape a list of files to analyse their new line characters. It replaces invalid new-line formats at the end of each file with a single form.

## Usage
Install the cli globally or locally, and use the `addnl` executable to specify a list of files:

```bash
addnl source/**/*.js
```
