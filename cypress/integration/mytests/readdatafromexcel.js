//import { readFileSync, writeFileSync } from "fs";
//..import { parse } from "papaparse";

const fs = require("fs")
const parse = require("paparse")
try {
  const csvFile = fs.readFileSync("./testData/testData.csv", "utf8");
  const csvResults = parse(csvFile, {
    header: true,
    complete: csvData => csvData.data
  }).data;
  writeFileSync(
    "./cypress/fixtures/testDataFromCSV.json",
    JSON.stringify(csvResults, null, 4),
    "utf-8"
  );
} catch (e) {
  throw Error(e);
}