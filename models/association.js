const Course = require("./course.model");
const User = require("./user.model");
const userCourse = require("./userCourse.model");

User.belongsToMany(Course, { 
    through: userCourse,
 });
Course.belongsToMany(User, {
     through: userCourse,
    });

    User.hasMany(userCourse);
    userCourse.belongsTo(User);
    Course.hasMany(userCourse);
    userCourse.belongsTo(Course);
