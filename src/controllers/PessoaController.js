const Controller = require("./Controller.js");
const PessoasServices = require("../services/PessoasServices.js");

const pessoasServices = new PessoasServices();
// const Services = require("../services/Services.js");
// const pessoasServices = new Services("Pessoa");

class PessoaController extends Controller {
  constructor() {
    super(pessoasServices);
  }
}

module.exports = PessoaController;
