const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

// Configurando o handlebars com o template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    const items = ['item a', 'item b', 'item c']


    res.render('dashboard', {item})
})

app.get('/', (req, res) => {
    const usuario = {
        nome: "Johnny",
        profissao: "Estagiáriao",
        idade: 21
    }

    const auth = true

    res.render('home', { usuario, auth })
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})