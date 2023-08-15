require("dotenv").config();
require("../models");
const Sequelize = require("../config/db.config");
const syncModelsWithDB = async () => {
  try {
    await Sequelize.sync({ alter: true });
    console.log("Models Sync Succesfully");
  } catch (error) {
    console.log("There is some error in syncing models", error);
  }
};
syncModelsWithDB();
