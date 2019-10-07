#!/usr/bin/env node
const app = require('commander');
const { getTrelloBoard, trelloToModel } = require('./lib/trello');
const { writeAsBook, rawer } = require('./lib/book-writer');

// index.js -k 45164c7b6940e02e6db17215e04055bf -t 2d944afaa6d1947a33dbd8190b18d80ed0d714d3cb98232910367160603e7e49
// ./scripts/t2book/index.js -k 45164c7b6940e02e6db17215e04055bf -t 2d944afaa6d1947a33dbd8190b18d80ed0d714d3cb98232910367160603e7e49 -o docs
//

app
    .version('1.0.0')
    .option('-k, --key <key>', 'Trello API Key')
    .option('-t, --token <token>', 'Trello API Token')
    .option('-r, --raw <raws>', 'Export Raw', '')
    .option('--board <board>', 'Trello board', 'Sphérier')
    .option('-o, --output-dir <output-dir>', 'output directory', 'tmp')
    .action((options) => {
        const writeRaw = rawer(options.raw, options.outputDir);
        getTrelloBoard(options.key, options.token, options.board)
            .then(writeRaw('trello'))
            .then(trelloToModel)
            .then(writeRaw('model'))
            .then(writeAsBook(options.outputDir))
        // .then((trelloOutput) =>
        // console.log('GOT: ' + JSON.stringify(trelloOutput))
        // )
        ;
    });

app.parse(process.argv);