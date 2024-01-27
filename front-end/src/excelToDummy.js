const xlsx = require('xlsx');
const fs = require('fs');

// 엑셀 파일 읽기
const workbook = xlsx.readFile("./src/dummyData.xlsx");
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(sheet);

// 변환된 데이터 생성
const userData = data.map(item => ({
  date: item['날짜'],
  close: parseInt(item['종가']),
  open: parseInt(item['시가']),
  highest:parseInt(item['고가']),
  lowest:parseInt(item["저가"])
}));

// dummy.js 파일로 저장
const outputCode = `export const userData = ${JSON.stringify(userData, null, 2)};`;

fs.writeFileSync('dummyData.js', outputCode);
