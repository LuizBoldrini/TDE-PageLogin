const login = require('./login')
const cadastro = require('./cadastro')

const routes = (app) => {
    app.use(login)
    app.use(cadastro)
}

module.exports = routes