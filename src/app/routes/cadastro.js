const express = require('express')
const router = express.Router()
require('dotenv').config();


let usuario = process.env.USUARIO

router
    .get('/cadastro.ejs', (req, res) => {
        res.render('cadastro')
    })
    .post('/cadastro.ejs', (req, res) => {
        if(req.body.senha == req.body.confirma && req.body.usuario == usuario){
            req.session.usuario = usuario
            
            res.render('log', {usuario: usuario})
        } else {
            res.render('cadastro')
        }
        
    })

module.exports = router