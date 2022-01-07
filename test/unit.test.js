'use strict';

const nock = require('nock');

describe("unit test", () => {
    
    /* BEFORE ALL: load mocks */
    beforeAll(() => {
        // set env vars
        process.env.API_HOST = 'http://localhost';
        process.env.API_PORT = '5000';
        process.env.SOCKET_PORT = '5001';

        require('./mocks');
    })

    /* IMPORT JEST TESTS */
    require('./jest');
});
