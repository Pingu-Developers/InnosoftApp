const nock = require('nock');

const mockGetSpeakers = nock('http://localhost:5000')
    .get(`/api/v1/speakers`)
    .reply(200, [
        {
            "speakerId": 2713,
            "speakerName": "Alberto Fernández",
            "speakerDescription": "Ingeniero Técnico en Informática de Sistemas por la Universidad de Sevilla. Más de 15 años de experiencia profesional. Contributing member de la PSF e Individual member de la DSF."
        }]);