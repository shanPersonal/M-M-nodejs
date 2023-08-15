const User = require("./user.model");
const Course = require("./course.model");
const userCourse=require('./userCourse.model')
require("./association");

module.exports = {
  User,
  Course,
  userCourse
};
