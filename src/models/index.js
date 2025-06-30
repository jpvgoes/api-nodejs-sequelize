"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// Esse arquivo (index.js) é o responsável por inicializar e configurar o Sequelize na sua aplicação Node.js. Ele faz o seguinte:

// Lê as configurações do banco de dados do arquivo config/config.json de acordo com o ambiente (development, test, production).
// Cria uma instância do Sequelize para conectar ao banco de dados.
// Lê todos os arquivos de modelos (arquivos .js que não sejam este próprio arquivo ou arquivos de teste) na pasta models.
// Importa e inicializa cada modelo, adicionando-os ao objeto db.
// Se algum modelo tiver associações (relacionamentos), ele as configura.
// Exporta o objeto db, que contém todos os modelos e a instância do Sequelize, para ser usado no restante da aplicação.
// Em resumo: ele automatiza o carregamento dos modelos e a configuração do Sequelize, centralizando tudo em um único lugar.
