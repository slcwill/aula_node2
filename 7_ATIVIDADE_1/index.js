const express = require('express');
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rota GET para a página Home
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/home.html');
});

// Rota GET para a página de cadastro
app.get('/cadastro', (req, res) => {
  res.sendFile(__dirname + '/public/cadastro.html');
});

// Rota POST para receber informações do corpo da requisição
app.post('/processar-cadastro', (req, res) => {
  const { nome, email } = req.body;
  // Faça algo com os dados recebidos
  console.log(`Nome: ${nome}, Email: ${email}`);
  res.send('Cadastro realizado com sucesso!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
