
const express = require("express");
const songsRoutes = require("../src/routes/song.route");
const cors = require("cors");

const app = express();
app.use(cors({
    origin:["http://audio-player-ef9q.vercel.app",
        "https://audio-player-ef9q.vercel.app"
    ],
    methods:["GET","POST","PUT","DELETE"]
}));
app.use(express.json());


app.use("/",songsRoutes)


module.exports = app;