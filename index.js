const app = require("./src/config/app");
const sequelize = require("./src/config/db");
const { config } = require("dotenv");
config();

//Solicitamos variable de entorno
const PORT = process.env.PORT;

//Iniciamos el servidor
async function startserver() {
  try {
    app.listen(PORT, () => {
      console.log("Server is running on port",`http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("Unable to initiate", error);
  }
}
startserver();

//Autenticamos  la conexion a base de datos
(async () => {
  try {
    sequelize.authenticate().then(() => {
      console.log("Authenticate has  been successfull");
    });
  } catch (error) {
    console.log("Error in connection: ", error);
  }
})();
