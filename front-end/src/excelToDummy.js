const xlsx = require("xlsx");
const fs = require("fs");

// 엑셀 파일 읽기
const workbook = xlsx.readFile("./src/dummyData.xlsx");
const sheetName01 = workbook.SheetNames[0];
const sheet01 = workbook.Sheets[sheetName01];
const data01 = xlsx.utils.sheet_to_json(sheet01);

const sheetName02 = workbook.SheetNames[1];
const sheet02 = workbook.Sheets[sheetName02];
const data02 = xlsx.utils.sheet_to_json(sheet02);

// 변환된 데이터 생성
const userData01 = data01.map((item) => ({
  date: item["날짜"],
  close: parseInt(item["종가"]),
  open: parseInt(item["시가"]),
  highest: parseInt(item["고가"]),
  lowest: parseInt(item["저가"]),
}));

const userData02 = data02.map((item) => ({
  name: item["name"],
  price: parseFloat(item["price"]),
  change: parseFloat(item["change"]),
}));

// dummy.js 파일로 저장
const outputCode01 = `export const userData01 = ${JSON.stringify(
  userData01,
  null,
  2
)};`;

fs.writeFileSync("src/dummyData01.js", outputCode01);

const outputCode02 = `export const userData02 = ${JSON.stringify(
  userData02,
  null,
  2
)};`;

fs.writeFileSync("src/dummyData02.js", outputCode02);
