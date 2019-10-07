'use strict';
const axios = require('axios');

function getTrelloBoard(key, token, board) {
    return axios({
        method: 'get',
        url: 'https://api.trello.com/1/search',
        params: {
            key,
            token,
            query: 'board:' + board + ' and -is:archived',
            modelTypes: 'cards',
            card_fields: 'name,shortUrl,desc,pos',
            cards_limit: '1000',
            card_list: 'true'
        }
    }).then(response => response.data);
}

function gitbookName(name) {
    // iconv -f UTF-8 -t ASCII//TRANSLIT |
    // sed -e 's/\(.*\)/\L\1/
    // s/|/\//g
    // s/[ /]\+/-/g
    //     s/[^a-z0-9+-]//g'
    return name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[^a-z- ]/g, '')
        .replace(/\s+/g, '-')
        .replace(/--+/g, '-');
}

const trelloToModel = (trello) => {
    const pages = trello.cards
        .map(cardToModel)
        .sort(sortByPosition)
        .map(withFileName)
        .reduce(recursiveMergePages, []);
    return {
        pages: pages
    };
};

const cardToModel = (card) => ({
    ...toModel(card.list),
    pages: [ toModel(card) ]
});

const toModel = ({ name, desc: description = '', pos: position, shortUrl = '' }) => ({
    name: name,
    description,
    position,
    trelloShortUrl: trelloUrlToId(shortUrl),
    pages: []
});

const trelloUrlToId = (url) => url.replace('https://trello.com/c/', '');

function foldChildren(parent, pages) {
    let _parent = {
        ...parent,
        pages: []
    };
    const parentNormalizedName = gitbookName(parent.name);
    pages.forEach(child => {
        const childNormalizedName = gitbookName(child.name);
        const existing = parentNormalizedName === childNormalizedName;
        if (existing) {
            _parent = mergePages(_parent, child);
            _parent = foldChildren(_parent, child.pages);
            _parent.position = parent.position;
        } else if ([ 'description', 'readme' ].includes(childNormalizedName)) {
            _parent.description = child.description;
        } else {
            _parent.pages.push(child);
        }
    });
    return _parent;
}

const withFileName = (model) => {
    const names = model.name.split(/\s\|/)
        .map(s => s.trim());
    if (names.length === 1) {
        let current = {
            ...model,
            fileName: gitbookName(model.name),
            pages: []
        };
        return foldChildren(current, model.pages.map(withFileName));
    } else {
        const name = names.shift();
        return {
            name: name,
            fileName: gitbookName(name),
            pages: [ withFileName({ ...model, name: names.join(' | ') }) ]
        };
    }
};

const recursiveMergePages = (accumulator, current) => {
    const existing = accumulator.find(page => gitbookName(page.name) === gitbookName(current.name));
    if (existing) {
        const merged = mergePages(existing, current);
        accumulator.splice(accumulator.indexOf(existing), 1, merged);
        return accumulator;
    } else {
        return [ ...accumulator, current ].sort(sortByPosition);
    }
};

function mergePages(previous, current) {
    const pages = (previous.pages || []).concat(current.pages || []);
    const description = (!previous.description || previous.description.length === 0)
        ? current.description
        : previous.description;
    if ([ 'Règles De Base',
        'Carrure',
        'Agilité',
        'Réactivité',
        'Intelligence',
        'Perception',
        'Ego' ].includes(previous.name)) {
        console.log(`previous description %s`, previous.description)
        console.log(`current description %s`, current.description)
        console.log(`description %s`, description)
    }

    return {
        ...previous,
        ...current,
        description: description,
        pages: pages.reduceRight(recursiveMergePages, [])
    };
}

const sortByPosition = (left, right) => left.position - right.position;

module.exports = {
    getTrelloBoard,
    trelloToModel
};