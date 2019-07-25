'use strict';
import express from 'express';
import serverless from 'serverless-http';
import bodyParser from 'body-parser';

// import checkinCreate from './routes/checkinCreate';
// import userCheckins from './routes/userCheckins';
import routes from './routes';

const app = express();

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});

// checkinCreate(router);
// userCheckins(router);
routes(router);

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  next();
});

app.use('/.netlify/functions/server', router);

export const handler = serverless(app);