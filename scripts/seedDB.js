// const { User,Role } = require('../models/index');
// const bcrypt = require("bcryptjs");
// const seedRoles =async()=>{
//   await Role.bulkCreate([{
//       name:"Admin",
//   },{
//       name:"User"
//   }])
// }
// const createAdminUser = async () => {
//   const adminUser = {
//     name: "Admin",
//     email: "admin@gmail.com",
//     password: bcrypt.hashSync("Password@1", 8),
//     roleId: 1
//   };
//   await User.create(adminUser);
// }


// const seedDB = async () => {
//   try {
//     await seedRoles();
//     await createAdminUser();
//   } catch (error) {
//     console.log('There is some error in seeding database', error)
//   }
// }

// seedDB()