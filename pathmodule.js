const path = require('path');

let a1 = path.basename('c:\\hell0\\sample.js')
console.log(a1);
a1 = path.dirname('c:\\hell0\\sample.js');
console.log(a1);
a1 = path.extname(__filename)
console.log(a1);