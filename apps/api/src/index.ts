import cors from 'cors';
import express from 'express';

import { Workspace, toto } from 'types';
console.log('🤯 ~ file: index.ts:5 ~ toto:', toto);

const app = express();
const port = 8085;

app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/workspaces', (_, response) => {
  const workspaces: Workspace[] = [
    { name: 'api', version: '1.0.0' },
    { name: 'types', version: '1.0.0' },
    { name: 'web', version: '1.0.0' },
  ];
  response.json({ data: workspaces });
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
