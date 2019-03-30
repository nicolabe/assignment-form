const express = require('express');

const app = express();

app.get('/api/user', (req, res) => {
  const user = {
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@mail.com"
  }

  res.json(user);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);