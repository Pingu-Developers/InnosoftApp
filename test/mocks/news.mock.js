import nock from 'nock';

const API_HOST = process.env.API_HOST;
const API_PORT = process.env.API_PORT;
const url = `${API_HOST}:${API_PORT}/api/v1`;

const newsMock = 
[
  {
    "postId": 0,
    "postTitle": "Title",
    "postContent": "Content",
    "postDateTime": "2022-01-07T23:12:43.072Z",
    "postAuthor": "Author"
  },
{
    "postId": 1,
    "postTitle": "Title",
    "postContent": "Content",
    "postDateTime": "2022-01-07T23:12:43.072Z",
    "postAuthor": "Author"
  }
];

nock(url)
    .get('/posts')
    .reply(200, newsMock);

