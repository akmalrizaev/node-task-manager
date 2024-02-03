const path = require('path');

// const notFound = (req, res) => res.status(404).send('Route does not exist');

const notFound = (req, res) =>
  res.status(404).sendFile(path.join(__dirname, 'notfound.html'));

module.exports = notFound;
