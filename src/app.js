const express = require('express');
const app=express();
app.get('/', (req, res) => {
    res.send('Backend is running. Use /api/graphql for GraphQL queries.');
  });

module.exports=app;