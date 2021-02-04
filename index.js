const express = require('express');
const app = express();
const moviesApi = require('./routes/movies');

const { config } = require('./config/index');

moviesApi(app);

app.listen(config.port, () => {
  console.log(`Listening on port: ${config.port}`);
});
