const Cadastro = require('../models/Cadastro')
const CadastroController = require('./CadastroController')
require('dotenv').config();


let usuario = process.env.USUARIO
let senha = process.env.SENHA

class LogController {

    async logPost(req, res) {
        try {
            if(req.body.senha == senha && req.body.usuario == usuario){
                req.session.usuario = usuario
                
                return res.render('log', {usuario: usuario})
            } else {
                return res.render('index')
            }

        } catch(error) {
            return res.send(error)
        }
    }

    async pageIni(req, res) {
        try {
            return res.render('index')
        
        } catch(error) {
            return res.send(error)
        }
    }
}

module.exports = new LogController()