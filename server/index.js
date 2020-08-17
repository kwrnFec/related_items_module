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
  url: 'http://52.26.193.201:3000/products/list/',
  headers: {
    'User-Agent': 'request',
  },
};

const oneProductRelationOptions = {
  url: 'http://52.26.193.201:3000/products/1/related',
  headers: {
    'User-Agent': 'request',
  },
};

app.get('/outfit', (req, res) => {
  Product.find({}).exec()
    .then((data) => {
      res.send(data);
    });
});

app.post('/outfit', jsonParser, (req, res) => {
  Product.create(req.body.data, (err) => {
    if (err) return err;
    res.send(req.body.data);
    return console.log(Product);
  });
});

app.patch('/outfit', jsonParser, (req, res) => {
  Product.findOneAndDelete({ id: req.body.data }, (err) => {
    if (err) return err;
    console.log(err);
    res.send('Deleted!');
    return 'hello';
  });
});

app.get('/data', (req, res) => {
  axios.get(productOptions.url)
    .then((response) => {
      res.json(response.data);
    });
});

app.get('/oneProductRelation', (req, res) => {
  axios.get(oneProductRelationOptions.url)
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    });
});

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
