/* eslint-disable no-console */
const express = require('express');
const axios = require('axios');
// const bodyParser = require('body-parser');
const path = require('path');

// const jsonParser = bodyParser.json();
const app = express();
const port = 3000;

app.use(express.static('client/dist'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.get('/rp', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/bundle.js'));
});

const oneProductRelationOptions = {
  url: 'http://52.26.193.201:3000/products/1/related',
  headers: {
    'User-Agent': 'request',
  },
};

app.get('/rp/oneProductRelation', (req, res) => {
  axios.get(oneProductRelationOptions.url)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

// app.get('/rp/relatedItems', jsonParser, (req, res) => {
//   console.log(req.body);
//   axios.get(`http://52.26.193.201:3000/products/${req.body.id}`)
//     .then((response) => {
//       res.json(response.data);
//     })
//     .catch((error) => {
//       // console.log(error);
//     });
// });

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
