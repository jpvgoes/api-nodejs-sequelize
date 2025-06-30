const app = require("./src/app.js");

const PORT = 3000;

// Inicia o Servidor para ouvir requisições
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
