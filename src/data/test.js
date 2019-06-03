import CSV from comma-separated-values

const csv = new CSV(data, {header: true}).parse();

const cols = [[],[]];

csv.forEach(row => {
  row.forEach((cell, idx) => {
    cols[idx].push(cell);
  });
})

console.log(cols[0])