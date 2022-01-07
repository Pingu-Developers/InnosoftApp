'use strict';

describe("Test Unitarios", () => {
    process.env.API_HOST = 'http://localhost';
    process.env.API_PORT = '5000';
    process.env.SOCKET_PORT = '5001';
    
    /* BEFORE ALL: load mocks */
    beforeAll(() => {
        require('./mocks');
    })

    /* IMPORT JEST TESTS */
    require('./jest');
});
