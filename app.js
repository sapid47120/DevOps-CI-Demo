const express = require('express');
const app = express();
const port = 3000;

// Route for browser
app.get('/', (req, res) => {
  res.send('Hello CI from Node.js!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
