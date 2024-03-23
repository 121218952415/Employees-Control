const express = require("express");
const cors = require("cors");
const cookieparser = require("cookie-parser");
const morgan = require("morgan");
const routes = require("../routes/index");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(cookieparser());
app.use(express.json());
app.use(routes);

module.exports = app;
