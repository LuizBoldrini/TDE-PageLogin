const { Error } = require('mongoose')
const Cadastro = require('../models/Cadastro')

class CadastroController {
    async criarCadastro(req, res) {
        const usuario = req.body.usuario
        try {
            const reqBody = req.body

            if(req.body.senha == req.body.confirma){
                req.session.usuario = usuario
                const cadastroCriado = await Cadastro.create(reqBody)

                return res.render('log', {usuario: usuario})
            } else {
                return res.render('cadastro')
                send(Error)
            }

        } catch (error) {
            return res.send(error)
        }
    }
    async pageIni(req, res) {
        return res.render('cadastro')
    }

}

module.exports = new CadastroController()