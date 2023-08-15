const sequelize = require("sequelize");
require("dotenv").config();

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const Sequelize = new sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  dialect: "postgres",
  host: DB_HOST,
  port: DB_PORT,
});

module.exports = Sequelize;
