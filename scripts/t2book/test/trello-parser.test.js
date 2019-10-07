const fs = require('fs');
const { trelloToModel } = require('../lib/trello');


it('should get a test file', () => {
    const trelloRaw = readFile('__resources__/trello.raw.json');
    expect(trelloRaw).toBeDefined();
});

describe('Parse Trello to Model', () => {

    describe('Parse Lists', () => {

        it('should get list from card', () => {
            const trelloRaw = readResource('simple.card.json');
            const model = trelloToModel(trelloRaw);

            expect(model.pages[0])
                .toMatchObject({
                    name: 'Liste standard',
                    fileName: 'liste-standard',
                    pages: expect.any(Array),
                });
        });

        it('should get single list from multiple cards', () => {
            const trelloRaw = readResource('two-cards-in-same-list.card.json');
            const model = trelloToModel(trelloRaw);

            expect(model.pages).toHaveLength(1);
            expect(model.pages[0].pages).toHaveLength(2);
        });

        it('should get multiple lists from multiple cards', () => {
            const trelloRaw = readResource('two-cards-in-two-lists.card.json');
            const model = trelloToModel(trelloRaw);

            expect(model.pages).toHaveLength(2);
            expect(model.pages[1])
                .toMatchObject({
                    name: 'Seconde liste fort différente',
                    fileName: 'seconde-liste-fort-differente',
                    pages: expect.any(Array)
                });
        });
    });

    describe('Parse Cards', () => {

        it('should get card as subpage of list', () => {
            const trelloRaw = readResource('simple.card.json');
            const model = trelloToModel(trelloRaw);

            const page = model.pages[0].pages[0];
            expect(page).toHaveProperty('name', 'Une carte simple');
            expect(page).toHaveProperty('fileName', 'une-carte-simple');
            expect(page).toHaveProperty('description', 'Description succincte de la carte trello');
            expect(page).toHaveProperty('position', 12);
            expect(page).toHaveProperty('trelloShortUrl', '1234abcd');
        });

        it('should create a child when has a pipe into name', () => {
            const trelloRaw = readResource('simple-piped.card.json');
            const model = trelloToModel(trelloRaw);

            const page = model.pages[0].pages[0];
            expect(page).toHaveProperty('name', 'Dossier');
            expect(page).toHaveProperty('fileName', 'dossier');

            const subPage = page.pages[0];
            expect(subPage).toHaveProperty('name', 'Une carte simple');
            expect(subPage).toHaveProperty('fileName', 'une-carte-simple');
        });

        it('should create a child when has multiple pipes into name', () => {
            const trelloRaw = readResource('multi-piped.card.json');
            const model = trelloToModel(trelloRaw);

            let page = model.pages[0];
            expect(page.name).toEqual("Liste");

            page = page.pages[0];
            expect(page.name).toEqual("Sources");

            page = page.pages[0];
            expect(page.name).toEqual("Actions");

            page = page.pages[0];
            expect(page.name).toEqual("Unchained");
        });

        it('should fold children when having same name than parent', () => {
            const trelloRaw = readResource('fold.card.json');
            const model = trelloToModel(trelloRaw);

            const page = model.pages[0];
            expect(page.name).toEqual("Voies");
            expect(page.description).toEqual("Description succincte de la carte trello");
            expect(page.position).toEqual(10);
            expect(page.pages).toHaveLength(0);
        });

        it('should fold piped child when having same name than piped parent', () => {
            const trelloRaw = readResource('fold.piped-card.json');
            const model = trelloToModel(trelloRaw);

            let page = model.pages[0];
            expect(page.name).toEqual("Sphère");

            page = page.pages[0];
            expect(page.name).toEqual("Voies");

            page = page.pages[0];
            expect(page.name).toEqual("Veilleur");
        });

        it('should get card name with quotes', () => {
            const trelloRaw = readResource('simple-piped-with-quotes.card.json');
            const model = trelloToModel(trelloRaw);

            const page = model.pages[0].pages[0];
            expect(page).toHaveProperty('name', 'Dossier');
            expect(page).toHaveProperty('fileName', 'dossier');

            const subPage = page.pages[0];
            expect(subPage).toHaveProperty('name', '"Une carte simple"');
            expect(subPage).toHaveProperty('fileName', 'une-carte-simple');
        });

        it('should fold child named "description" in parent description', () => {
            const trelloRaw = readResource('description.card.json');
            const model = trelloToModel(trelloRaw);

            let page = model.pages[0];
            expect(page.name).toEqual("Voies");
            expect(page.description).toEqual("Cette description doit se retrouver dans le parent");
            expect(page.pages).toHaveLength(0);
        });

        it('should fold child named "README" in parent description', () => {
            const trelloRaw = readResource('description-as-readme.card.json');
            const model = trelloToModel(trelloRaw);

            let page = model.pages[0];
            expect(page.name).toEqual("Voies");
            expect(page.description).toEqual("Cette description doit se retrouver dans le parent");
            expect(page.pages).toHaveLength(0);
        });

    });
});

function readResource(fileName) {
    return readFile('__resources__/' + fileName);
}

function readFile(fileName) {
    const fileContent = fs.readFileSync(__dirname + '/' + fileName);
    return JSON.parse(fileContent);
}