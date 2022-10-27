const express = require('express')
const router = express.Router()
require('dotenv').config();


let usuario = process.env.USUARIO
let senha = process.env.SENHA

router
    .get('/', (req, res) => {
        if(req.session.usuario) {
            res.render('log', {usuario: usuario})
        } else {
            res.render('index')
        }
    })
    .post('/', (req, res) => {
        if(req.body.senha == senha && req.body.usuario == usuario){
            req.session.usuario = usuario
            
            res.render('log', {usuario: usuario})
        } else {
            res.render('index')
        }
        
    })
module.exports = router