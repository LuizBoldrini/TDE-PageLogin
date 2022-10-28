const express = require('express')
const router = express.Router()
const CadastroController = require('../controller/CadastroController')

router
    .get('/cadastro.ejs', CadastroController.pageIni)
    .post('/cadastro.ejs', CadastroController.criarCadastro)

module.exports = router