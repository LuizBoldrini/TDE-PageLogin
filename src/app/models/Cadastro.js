const mongoose = require('mongoose')

const Cadastro = new mongoose.Schema({
    usuario: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true,
    }
})

const Cadastros = mongoose.model("Cadastros", Cadastro)

module.exports = Cadastros