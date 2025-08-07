require("dotenv").config();
const express = require("express");
const songsRoutes = require("../src/routes/song.route");


const app = express();
app.use(express.json());

app.use("/",songsRoutes)


module.exports = app;