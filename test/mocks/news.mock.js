import nock from 'nock';

const API_HOST = process.env.API_HOST;
const API_PORT = process.env.API_PORT;
const url = `${API_HOST}:${API_PORT}/api/v1`;

const newsMock = 
[
    {
        "eventId": 0,
        "eventName": "Event 1",
        "eventStartDateTime": "2022-01-05T14:38:24.689Z",
        "eventEndDateTime": "2022-01-05T14:38:24.689Z",
        "eventTags": [
          "tag"
        ],
        "eventOrganizer": "Organizer 1",
        "eventLocation": "Location 1",
    },
    {
        "eventId": 1,
        "eventName": "Event 2",
        "eventStartDateTime": "2022-01-07T14:38:24.689Z",
        "eventEndDateTime": "2022-01-07T14:38:24.689Z",
        "eventTags": [
          "tag"
        ],
        "eventOrganizer": "Organizer 2",
        "eventLocation": "Location 2",
      }
];

nock(url)
    .get('/posts')
    .reply(200, newsMock);

