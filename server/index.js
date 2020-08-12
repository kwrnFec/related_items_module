const express = require('express');
const app = express();
const port = 3000;
const parser = require('body-parser');
const axios = require('axios');


app.use(express.static('client/dist'));

app.get('/', (req, res) => {
  res.end();
})

let productOptions = {
  url: `http://18.224.200.47/products/list/`,
  headers: {
    'User-Agent': 'request',
  }
};

let cartOptions = {
  url: `http://18.224.200.47/cart/1010220`,
  headers: {
    'User-Agent': 'request',
  }
};

app.get('/cart', function(req, res) {

  axios.get(cartOptions.url)
  .then((response) => {
    console.log(response.data);
    res.json(response.data);
  })


})


app.get('/data', function (req, res) {
  axios.get(productOptions.url)
  .then((response) => {
    console.log(response.data);
    res.json(response.data);
  })

})

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});