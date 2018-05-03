const fs = require('fs');

let file = process.argv[2];
console.log('[INFO] Starts sorting "' + file + '" file');
sort(file);
console.log('[INFO] Success : File "' + file + '" sorted');

function sort(file) {
    const jsonContent = readJSONFile(file);
    jsonContent.sort((l ,r) => {
        return l.name.localeCompare(r.name);
    });
    writeJSONFile(file, jsonContent);
}

function readJSONFile(currentFile) {
    const content = fs.readFileSync(currentFile);
    return JSON.parse(content);
}


function writeJSONFile(fileName, jsonContent) {
    fs.writeFile(fileName, JSON.stringify(jsonContent, null, 2), 'UTF-8', err => {
        if (err) {
            throw err;
        }
    });
}

