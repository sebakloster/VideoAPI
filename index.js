const express = require("express");
const app = express();
const moviesApi = require("./routes/movies");

const {
  logErrors,
  errorHandler,
  wrapErrors,
} = require("./utils/middleware/errorHandlers");

const notFoundHandler = require("./utils/middleware/notFoundHander");
const { config } = require("./config/index");
app.use(express.json());
moviesApi(app);

// catch err 404
app.use(notFoundHandler);

//errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening on port: ${config.port}`);
});
