import cors from 'cors';
import express from 'express';
import { toto, Workspace } from '@org/commons';

const app = express();
const port = 8085;

app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/workspaces', (_, response) => {
  const workspaces: Workspace[] = [
    { name: '@org/api', version: '1.0.0' },
    { name: '@org/web', version: '1.0.0' },
    { name: '@org/commons', version: '1.0.0' },
  ];
  response.json({ data: workspaces, name: toto });
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
