require("dotenv").config();
const { Model, DataTypes } = require("sequelize");
// const ForgotPasswordToken = require('../models/forgotPasswordToken.model')
const sequelize = require("../config/db.config");
const Course = require("./course.model");

class User extends Model {
  static associate(models) {
    // define association here
    // User.hasMany(Course)
  }
}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "The value Cann't be Empty" },
      },
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: "Please enter a valid email",
        },
        notEmpty: { msg: "The value Cann't be Empty" },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: { msg: "The value Cann't be Empty" },
      },
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

module.exports = User;
