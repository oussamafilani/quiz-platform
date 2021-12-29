
const express = require("express");
const router = express.Router()



const {RegesterSchema } = require('../../schema/RegesterSchema');


const User = require('../../controllers/UserController')






// user endpoint
router.get("/user", User.GatAll );


router.post('/user', RegesterSchema, User.Create);

  module.exports = router