'use strict';

const socket = require("socket.io-client")('http://localhost:5001', {transports: ['websocket']});
const { execSync } = require('child_process'); 

process.env.API_HOST = 'http://localhost';
process.env.API_PORT = '5000';
process.env.SOCKET_PORT = '5001';
process.env.E2E = true;

describe("e2e test", () => {
    console.error = jest.fn();
    /* BEFORE ALL: setup docker compose e2e */

    beforeAll((done) => {

        console.log('---------- Start E2E infrastructure ----------');
        try {
            execSync("docker-compose -f test/docker-compose-e2e.yaml pull");
            execSync("docker-compose -f test/docker-compose-e2e.yaml up -d");
            setTimeout(() => done(), 25000);
        } 
        catch (err) {
            console.log(err);
            done(err);
        }
    });   

    /* IMPORT JEST TESTS */
    require('./jest');

    /* AFTER ALL: docker compose down */
    afterAll((done) => {
        console.log('---------- Stop E2E infrastructure ----------');
        try {
            socket.disconnect();
            execSync("docker-compose -f test/docker-compose-e2e.yaml down");
            done();
        } catch (err) {
            console.log(err);
            done(err);
        }
    });
});