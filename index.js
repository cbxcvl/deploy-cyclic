require("dotenv").config();

const express = require("express");
const routes = require("./src/routes/index");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(process.env.SV_PORT);
