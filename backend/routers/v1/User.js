
const express = require("express");
const router = express.Router()



const {RegesterSchema } = require('../../schema/RegesterSchema');

const User = require('../../controllers/UserController')


// user endpoint
router.get("/users", User.GatAll );


router.post('/users', RegesterSchema, User.Create);

  module.exports = router