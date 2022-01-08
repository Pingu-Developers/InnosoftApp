'use strict';

const nock = require('nock');

describe("Test Unitarios", () => {
    console.error = jest.fn();

    process.env.API_HOST = 'http://localhost';
    process.env.API_PORT = '5000';
    process.env.SOCKET_PORT = '5001';

    /* IMPORT JEST TESTS */
    require('./jest');
});