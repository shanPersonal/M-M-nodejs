const express = require('express')
const router = express.Router()

const {Register, EditUserProfile, Login , UserByID,OrderConfirmation,checking} = require('../Controller/AuthController')
router.route('/user/checking').get(checking)
router.route('/user/').post(Register)
// router.route('/user/:id').get(JwtVerification,UserByID).patch(JwtVerification,EditUserProfile)
// router.route('/user/order').post(OrderConfirmation)
// router.route('/user/alterauth').post(Setpassword)
module.exports = router