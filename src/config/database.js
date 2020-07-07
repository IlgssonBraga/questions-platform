import Sequelize from "sequelize";

const connection = new Sequelize("questions", "root", "docker", {
  host: "localhost",
  dialect: "mysql",
});

export default connection;
