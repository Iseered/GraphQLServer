const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.get('/api/graphql', (req, res) => {
  res.send('GraphQL endpoint (placeholder)');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app; 
