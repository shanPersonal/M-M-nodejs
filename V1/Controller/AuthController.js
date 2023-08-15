const User = require("../../models/user.model");
const Course = require("../../models/course.model");
const userCourse = require("../../models/userCourse.model");
async function Register(req, res) {
  try {
    const payload = req.body;

    const user = await User.create({
      name: 'userName',
      email: 'shan.khan9660@gmail.com',
      password: 'password',
    });
    const course = await Course.create({
      name: 'Math',
    });
    // user.addCourse(course)

const pivot= await userCourse.create({
 userId:1,
courseId:1
})



    return res.status(200).json({ user:user, course:course });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
}
async function checking(req, res) {
  try {
    const IsUser = await User.findAll({
      include: userCourse,
    });
    res.send(IsUser);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
}

module.exports = {
  Register,
  checking
};
