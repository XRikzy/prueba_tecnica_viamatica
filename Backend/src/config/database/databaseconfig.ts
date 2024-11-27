import { Dialect } from "sequelize";
import DatabaseConnection from "./databaseConnection";

// Crea una instancia de la conexión a la base de datos
const dbConnection = new DatabaseConnection(
  "usersesions",
  "ricardo",
  "ricardo123",
  "localhost",
  "postgres" as Dialect
);

export const sequelize = dbConnection.getSequelizeInstance();
sequelize.sync().then(() => {
  console.log('Database synchronized');
}).catch(err => {
  console.error('Error syncing database:', err);
});
export default dbConnection;
