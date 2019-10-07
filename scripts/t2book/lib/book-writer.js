'use strict';
const fs = require('fs');
const path = require('path');

const writeAsBook = (outputDir) => {
    return (input) => {
        input.pages.forEach(writeModelAsBookSheet(outputDir));
        writeSummary(input, outputDir);
        return input;
    };
};

function getCurrentFileName(dir, current) {
    const fileExtension = '.md';
    return current.pages && current.pages.length === 0
        ? path.join(dir, current.fileName + fileExtension)
        : path.join(dir, current.fileName, 'README' + fileExtension);
}

const writeModelAsBookSheet = (dir) => {
    return (current, index, array) => {
        const {
            description = ''
        } = current;

        const currentFileName = getCurrentFileName(dir, current);
        writeFile(currentFileName, description + '\n');
        current.pages.forEach(writeModelAsBookSheet(path.dirname(currentFileName)));
    };
};

function writeSummary(model, outputDir) {
    const summary = {
        content: '# Table of Content\n\n',
        depth: 1
    };
    model.pages.forEach(appendToSummary(summary, ''));
    const fileExtension = '.md';
    writeFile(path.join(outputDir, 'SUMMARY' + fileExtension), summary.content);
}

function appendToSummary(summary, dir) {
    return (current) => {
        const currentFileName = getCurrentFileName(dir, current);

        summary.content = summary.content +
            ' '.repeat(summary.depth) +
            `* [${ current.name }](${ currentFileName })\n`;

        summary.depth = summary.depth + 2;
        current.pages.forEach(appendToSummary(summary, path.dirname(currentFileName)));
        summary.depth = summary.depth - 2;
    };
}

function writeFile(fileName, content) {
    const dirname = path.dirname(fileName);
    fs.mkdirSync(dirname, { recursive: true });
    fs.writeFileSync(fileName, content, 'UTF-8');
}

const rawer = (allowedTypes, dir) => {
    return (type) =>
        allowedTypes.includes(type)
            ? (obj) => {
                writeFile(path.join(dir, type + '.raw.json'), JSON.stringify(obj, null, 2));
                return obj;
            }
            : obj => obj;
};

function writeRaw(jsonModel) {
    writeFile('trello.raw.json', JSON.stringify(jsonModel, null, 2));
}

module.exports = {
    rawer,
    writeAsBook
};