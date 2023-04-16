const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./expoThing.js', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second);

writeFileSync(
    './builtInModules.js',
    'This file is created on time\nhow this now\n\n', { flag: 'a' }
)