const fs = require('fs');

const source = process.argv[2];
const dest = process.argv[3];


let opposite = fs.readFileSync(source).reverse();

fs.writeFileSync(dest, opposite);

