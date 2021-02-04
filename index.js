const express = require("express");
const app = express();
const moviesApi = require("./routes/movies");
const bodyParser = require("body-parser");

const { config } = require("./config/index");
app.use(bodyParser.json());
moviesApi(app);

app.listen(config.port, () => {
  console.log(`Listening on port: ${config.port}`);
});
