const nock = require('nock');

const mockGetEvents = nock('http://localhost:5000')
    .get('/api/v1/events')
    .reply(200, [{ "eventId": 2223, "eventName": "BIENVENIDO A INNOSOFTDAYS", "eventStartDateTime": "2019-11-04T08:30:00.000Z", "eventEndDateTime": "2019-11-04T10:30:00.000Z" },
    { "eventId": 2234, "eventName": "ACTO DE APERTURA", "eventStartDateTime": "2019-11-04T10:30:00.000Z", "eventEndDateTime": "2019-11-05T00:30:00.000Z" }]);