const express = require("express");
const routes = require("./routes/index.js");

const app = express(); // criacção da aplicação express

routes(app); // passando a aplicação express para as rotas

module.exports = app; // exportando a aplicação express para ser usada pelo servidor
