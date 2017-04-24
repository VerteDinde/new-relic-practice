const express = require('express');
const app = express();

app.get('/foo', (req, res) => {
  res.send('foo');
});

app.get('/bar', (req, res) => {
  res.send('bar');
});

module.exports = app;