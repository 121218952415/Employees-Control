const { Sequelize } = require("sequelize");
const { config } = require("dotenv");
config();

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.sync({ force: true , alter: true }); // Esto sincronizará todos los modelos con la base de datos y forzará la creación de nuevas tablas
    console.log('Modelos sincronizados correctamente');
  } catch (error) {
    console.error('Error al sincronizar modelos:', error);
  }
})();  





module.exports = sequelize;
