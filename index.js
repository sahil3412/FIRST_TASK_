const express = require('express');
const path = require('path');
const port = 8012;
const app = express();

const db = require('./config/mongoose')

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, 'assets')))

app.use(express.static(path.join(__dirname, 'user-assets')))

app.use(express.urlencoded());

app.use('/', require("./routes"));

app.listen(port, (error) => console.log("server running on port : " + port));