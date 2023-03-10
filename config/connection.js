import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const connection = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: "127.0.0.1",
      dialect: "mysql",
      dialectOptions: {
        decimalNumbers: true,
      },
    });

export default connection;
