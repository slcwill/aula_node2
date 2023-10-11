const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

// Configurando o handlebars com o template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')


/// rotas

app.get('/post', (req, res) => {

    const post = {
        title: "Aprender Node.js",
        category: "Javascript",
        body: "Este artigo vai te ajudar a aprender Node.JS",
        comments: 13
    }
    res.render('post', { post })
})


app.get('/dashboard', (req, res) => {
    const items = ['item a', 'item b', 'item c']


    res.render('dashboard', {item})
})

app.get('/', (req, res) => {
    const usuario = {
        nome: "Johnny",
        profissao: "Estagiário",
        idade: 21
    }

    const auth = true

    res.render('home', { usuario, auth })
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})