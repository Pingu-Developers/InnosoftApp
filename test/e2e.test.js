'use strict';

const socket = require("socket.io-client")('http://localhost:5001', {transports: ['websocket']});

describe("e2e test", () => {
    
    /* BEFORE ALL: setup docker compose e2e */
    before(() => {
        // set env vars
        process.env.API_HOST = 'http://localhost';
        process.env.API_PORT = '5000';
        process.env.SOCKET_PORT = '5001';

        console.log('---------- Start E2E infrastructure ----------');
        try {
            execSync("docker-compose -f tests/docker-compose-e2e.yaml pull db innoApi innoChatDb");
            execSync("docker-compose -f tests/docker-compose-e2e.yaml up -d db innoApi innoChatDb");
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
    after((done) => {
        console.log('---------- Stop E2E infrastructure ----------');
        try {
            socket.disconnect();
            execSync("docker-compose -f tests/docker-compose-e2e.yaml down");
            done();
        } catch (err) {
            console.log(err);
            done(err);
        }
    });
});

