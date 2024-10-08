const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Fetching all users on / path' });
});

app.get('/api/users', (req, res) => {
  res.status(200).json({ message: 'Fetching all users' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
