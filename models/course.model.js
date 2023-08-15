const { Model, DataTypes } = require("sequelize");
// const ForgotPasswordToken = require('../models/forgotPasswordToken.model')
const sequelize = require("../config/db.config");
const User = require("./user.model");
class Course extends Model {
  static associate(models) {
    // define association here
    
    // Course.belongsTo(User)

  }
}

Course.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "The value Cann't be Empty" },
      },
    },
    
  },
  {
    sequelize,
    modelName: "Course",
  }
);

module.exports = Course;
