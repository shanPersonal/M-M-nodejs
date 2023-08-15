const { Model, DataTypes } = require("sequelize");
// const ForgotPasswordToken = require('../models/forgotPasswordToken.model')
const sequelize = require("../config/db.config");
class userCourse extends Model {}

userCourse.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    courseId: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "userCourse",
  }
);

module.exports = userCourse;
