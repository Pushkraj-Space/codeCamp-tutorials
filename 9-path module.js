const path = require('path');

const filePath = path.join('content', '..subfolder', 'demo.txt');
console.log(filePath)

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve('/content', 'subfolder', 'demo.txt')
console.log(absolute);