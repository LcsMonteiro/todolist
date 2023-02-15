const express = require("express");
const router = require("./router");

const app = express();

app.use(express.json());
app.use(router);

app.get("/", function (req, res) {
    res.send("Hello World!");
});

module.exports = app;