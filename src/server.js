const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3001; // You can use a different port if needed

app.use(express.json());

app.get('/fetchData', async (req, res) => {
  try {
    const response = await fetch(req.query.url);
    const data = await response.text();
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
