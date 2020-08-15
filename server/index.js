/* eslint-disable no-console */
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const Product = require('../database.js');

const app = express();
const port = 3000;

const jsonParser = bodyParser.json();

app.use(express.static('client/dist'));

app.get('/', (req, res) => {
  res.end();
});

const productOptions = {
  url: 'http://18.224.200.47/products/list/',
  headers: {
    'User-Agent': 'request',
  },
};

const oneProductRelationOptions = {
  url: 'http://18.224.200.47/products/1/related',
  headers: {
    'User-Agent': 'request',
  },
};

const styleOptions = {
  url: 'http://18.224.200.47/products/1/styles',
  headers: {
    'User-Agent': 'request',
  },
};

app.get('/cart', (req, res) => {
  Product.find({}).exec()
    .then((data) => {
      res.send(data);
    });
});

app.post('/cart', jsonParser, (req, res) => {
  Product.create(req.body.data, (err) => {
    if (err) return err;
    res.send(req.body.data);
    return console.log(Product);
    // saved!
  });
});

app.get('/data', (req, res) => {
  axios.get(productOptions.url)
    .then((response) => {
      res.json(response.data);
    });
});

app.get('/styles', (req, res) => {
  axios.get(styleOptions.url)
    .then((response) => {
      res.json(response.data);
    });
});

app.get('/oneProductRelation', (req, res) => {
  axios.get(oneProductRelationOptions.url)
    .then((response) => {
      res.json(response.data);
    });
});

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
