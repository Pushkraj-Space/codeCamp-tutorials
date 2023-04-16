const { readFile, writeFile } = require('fs');

readFile(
    './content/first.txt',
    'utf8',
    (err, res) => {
        if (err) {
            console.log(err);
            return
        }
        console.log(res);
        writeFile(
            './content/first.txt',
            'No one is like Js', { flag: 'a' },
            (err, res) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log(res)
            },
        )
    }
)

// async mmethod