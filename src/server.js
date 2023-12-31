const express = require('express');
const path = require('path');

const app = express();
const port = 5173;

// Servir l'application React (build statique) depuis le répertoire "build"
app.use(express.static(path.join(__dirname, 'build')));

// Gérer toutes les autres requêtes en renvoyant l'application React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});