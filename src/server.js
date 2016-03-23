import config from '../config/config.js';
const fs = require('fs');
const path = require('path');

// Create express app
import express from 'express';
const app = express();

// Adding caching for 30 days
const cacheTime = 86400000 * 30;

app.use('/js/?', express.static(__dirname + '/../build/js', { maxAge: cacheTime }));
app.use('/css/?', express.static(__dirname + '/../dist/css'));
app.use('/css/?', express.static(__dirname + '/../src/static/css'));
app.use('/js/?', express.static(__dirname + '/../src/static/js', { maxAge: cacheTime }));
app.use('/js/?', express.static(__dirname + '/../src/vendors', { maxAge: cacheTime }));
app.use('/fonts/?', express.static(__dirname + '/../src/static/fonts', { maxAge: cacheTime }));
app.use('/images/?', express.static(__dirname + '/../src/static/images', { maxAge: cacheTime }));

import { renderHomePage } from './helpers/html.js';

app.get('/', function(req, res) {
  res.send(renderHomePage());
});

app.get('/data', function(req, res) {
  const data = fs.readFileSync(path.join(__dirname, '../data.json'), 'utf8');
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
});

const port = process.env.PORT || config.serverPort;
app.listen(port, function() {
  console.log('Listening on ' + port);
});
