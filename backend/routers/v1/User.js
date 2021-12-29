
const express = require("express");
const router = express.Router()


const { QueryTypes } = require('sequelize');
const db = require('../../models');

const {validationResult } = require('express-validator');

const {RegesterSchema } = require('../../schema/RegesterSchema');






// const User = require('../../controllers/UserController')






// user endpoint
// router.get("/user", User.GatAll );


router.post(
    '/user',
    RegesterSchema,
    
    async (req, res) => {

      // Finds the validation errors in this request and wraps them in an object with handy functions
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }
  
      await db.User.findOrCreate({
        where: { email: req.body.email },
        defaults: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            role: req.body.role
        }
      }).then(user =>  res.status(200).send(user));
    }
  );

  module.exports = router