'use strict';
import express from 'express';
import serverless from 'serverless-http';
import bodyParser from 'body-parser';

import checkinCreate from './routes/checkinCreate';

const app = express();

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));

checkinCreate(router);

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use('/.netlify/functions/server', router);  // path must route to lambda

export const handler = serverless(app);