const fs = require('fs');
const { writeAsBook } = require('../lib/book-writer');

describe('Write Model As Book', () => {


    it('should write model as book', () => {
        let model = readResource('simple-piped-with-quotes.card.json');
        model = {
            'pages': [
                {
                    'name': 'Idées en vrac',
                    'description': '',
                    'fileName': 'idees-en-vrac',
                    'position': 65535,
                    'trelloShortUrl': '',
                    'pages': [
                        {
                            'name': 'Achievments',
                            'description': 'Faire faire un vote aux joueurs pour déterminer qui est le meilleur truc ou bidule.',
                            'position': 81920,
                            'trelloShortUrl': 'A8EkQ4R0',
                            'pages': [],
                            'fileName': 'achievments'
                        }
                    ]
                } ]
        };

        writeAsBook('test/tmp')(model)
    });

});

function readResource(fileName) {
    return readFile('__resources__/' + fileName);
}

function readFile(fileName) {
    const fileContent = fs.readFileSync(__dirname + '/' + fileName);
    return JSON.parse(fileContent);
}