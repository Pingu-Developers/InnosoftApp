'use strict';

const socket = require("socket.io-client")('http://localhost:5001', {transports: ['websocket']});
const { execSync } = require('child_process'); 

describe("e2e test", () => {
    
    /* BEFORE ALL: setup docker compose e2e */
    beforeAll((done) => {
        // set env vars
        process.env.API_HOST = 'http://localhost';
        process.env.API_PORT = '5000';
        process.env.SOCKET_PORT = '5001';

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

