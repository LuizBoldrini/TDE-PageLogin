const express = require('express')
const path = require("path")
const routes = require('./app/routes/index')

const app = express()
app.set("views", path.join(__dirname, "./public/"));
app.set("view engine", "ejs");
app.use(express.static("public"));


routes(app)


module.exports = app