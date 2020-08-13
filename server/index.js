/* eslint-disable no-console */
const express = require('express');

const app = express();
const port = 3000;
const axios = require('axios');

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

const oneProductOptions = {
  url: 'http://18.224.200.47/products/1/related',
  headers: {
    'User-Agent': 'request',
  },
};

const cartOptions = {
  url: 'http://18.224.200.47/cart/13',
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

const relationOptions = {
  url: 'http://18.224.200.47/products/:product_id/styles',
  headers: {
    'User-Agent': 'request',
  },
};

app.get('/cart', (req, res) => {
  axios.get(cartOptions.url)
    .then((response) => {
      res.json(response.data);
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

app.get('/allRelationImages/:product_id', (req, res) => {
  axios.get(relationOptions.url)
    .then((response) => {
      res.json(response.data);
    });
});

app.get('/oneProductRelation', (req, res) => {
  axios.get(oneProductOptions.url)
    .then((response) => {
      res.json(response.data);
    });
});

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
