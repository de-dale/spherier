const { getTrelloBoard } = require('../lib/trello');

const axios = require('axios');
jest.mock('axios');

describe('Get Trello', () => {

    it('should call trello API', () => {
        const trelloRaw = [ { name: 'Bob' } ];
        axios.mockResolvedValue({ data: trelloRaw });

        return getTrelloBoard('Key', 'Token', 'Board').then(data => expect(data).toEqual(trelloRaw));
    });

});
