const express = require("express");
const app = express();
const moviesApi = require("./routes/movies");

const { config } = require("./config/index");
app.use(express.json());
moviesApi(app);

app.listen(config.port, () => {
  console.log(`Listening on port: ${config.port}`);
});
