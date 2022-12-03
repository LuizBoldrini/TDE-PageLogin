const Cadastro = require('../models/Cadastro')

class LogController {

    async logPost(req, res) {
        try {
            const user = req.body.usuario
            const senha = req.body.senha
            const procuraUser = await Cadastro.findOne({'usuario': user, 'senha': senha})

            if(!procuraUser){
                return res.render('logError')

            } else {
                req.session.usuario = user
                
                return res.render('log', {usuario: user})
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