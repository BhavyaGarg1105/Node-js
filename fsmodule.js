const fs = require('fs');

//Here Non blocking read is done.

// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data)
// })


//here node is intentionally blocking and reading the file.
const f = fs.readFileSync('file.txt');
console.log(f.toString());
console.log("Reading File finished.")