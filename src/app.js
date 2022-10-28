const express = require('express')
const path = require("path")
const routes = require('./app/routes/index')
const session = require('express-session')
const bodyParser = require('body-parser')
const database = require('./app/config/dbConnect')

database.on('error', console.log.bind(console, 'DB não conectado'));
database.once('open', () => {
  console.log('Conexão no BD feita com sucesso');
});

const app = express()
app.use(express.json());

app.use(session({secret: '123456'}))
app.use(bodyParser.urlencoded({extended: true}))
app.set("views", path.join(__dirname, "./public/"));
app.set("view engine", "ejs");
app.use(express.static("public"));


routes(app)


module.exports = app