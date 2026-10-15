const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use(session({
  secret: 'seu-segredo-aqui',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Defina como true se estiver usando HTTPS
}));


// ----.get---------------------------------------------------------------------------

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
}); 



// ----.post---------------------------------------------------------------------------

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  // Lógica para salvar o usuário no banco de dados
});
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  // Lógica para verificar o usuário no banco de dados
  // Se o usuário for válido, gere um token JWT
  const token = jwt.sign({ username }, 'seu-segredo-aqui', { expiresIn: '20min' });
  res.json({ token });
});






































app.listen(PORT, () => {
  console.log(`O servidor está rodando em http://localhost:${PORT}`);
});