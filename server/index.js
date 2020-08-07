const express = require('express');
const app = express();
const port = 3000;
const parser = require('body-parser');
const axios = require('axios');


app.use(express.static('client/dist'));

app.get('/', (req, res) => {
  res.end();
})

let options = {
  url: `http://18.224.200.47/products/list`,
  headers: {
    'User-Agent': 'request',
  }
};
app.get(options, (err, response)=>{
  if(err){
    res.send(err);
  } else {
    res.send(response);
  }
})

app.get('/data', function (req, res) {

  axios.get(options.url)
  .then((response) => {
    console.log(response.data);
    res.json(response.data);
  })

})

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});