import Sequelize from "sequelize";
import connection from "../../config/database";

const Question = connection.define("question", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Question.sync({ force: false }).then(() => {});
