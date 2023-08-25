import cors from 'cors';
import express from 'express';
import { JOHN, HelloWorldType } from '@org/commons';

const app = express();
const HOST = 'http://localhost';
const API_PORT = 8085;
const WEB_PORT = 3000;
const URL = `${HOST}:${WEB_PORT}`;
app.use(cors({ origin: URL }));

app.get('/helloWorld', (_, response) => {
  const helloWorld: HelloWorldType = {
    name: JOHN,
    welcome: 'Hello world',
  };
  response.json({ data: helloWorld });
});

app.listen(API_PORT, () => console.info(`Listening on ${URL}`));
