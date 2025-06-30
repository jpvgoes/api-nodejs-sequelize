const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");

const pessoaController = new PessoaController();

const router = Router();

router.get("/pessoas", (req, res) => pessoaController.pegaTodas(req, res));

module.exports = router;
