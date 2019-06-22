const express = require('express');
const app = express();

const historicoGuardaRouter = require('../routes/historico-guarda');

app.use(express.static('public'));


app.use('/historico-guarda', historicoGuardaRouter);



//localhost:3000/historico-guarda/teste
// const rotas = require('../app/routes/routes.js')

module.exports = app;