const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('client/dist'));

app.get('/', (req, res) => {
  res.end();
})

app.get('/cart/:user_token', (req, res) => {
  res.send(data)
  res.end();
})

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});