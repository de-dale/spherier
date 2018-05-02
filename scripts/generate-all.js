const find = require('find');
const fs = require('fs');


console.log('[INFO] Starts generating "all.spheres" file');
find.file(/.spheres\.json$/, '.', function (files) {

    const concatenatedJSON = concatJSONFiles(files);
    writeJSONFile('./main/all.spheres', concatenatedJSON);

    console.log('[INFO] Success : File "all.spheres" generated');
});

function concatJSONFiles(files) {
    return files.reduce((accumulator, currentFile) => {
        const jsonContent = readJSONFile(currentFile);
        return accumulator.concat(jsonContent);
    }, []);
}

function readJSONFile(currentFile) {
    const content = fs.readFileSync(currentFile);
    return JSON.parse(content);
}


function writeJSONFile(fileName, concatenatedJSON) {
    fs.writeFile(fileName, JSON.stringify(concatenatedJSON, null, 2), 'UTF-8', err => {
        if (err) {
            throw err;
        }
    });
}

