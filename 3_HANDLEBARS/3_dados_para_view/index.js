const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

// Configurando o handlebars com o template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    const usuario = {
        nome: "Johnny",
        profissao: "Estagiário",
        idade: 21
    }

    res.render('home', { usuario })
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})