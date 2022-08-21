const { Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    published: Sequelize.BOOLEAN,
  });
  return Tutorial;
};
