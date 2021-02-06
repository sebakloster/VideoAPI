const express = require("express");
const app = express();
const moviesApi = require("./routes/movies");

const { logErrors, errorHandler } = require("./utils/middleware/errorHandlers");

const { config } = require("./config/index");
app.use(express.json());
moviesApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening on port: ${config.port}`);
});
