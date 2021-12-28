
const express = require("express");
const router = express.Router()

const { QueryTypes } = require('sequelize');
const db = require('../../models');
const { body, validationResult } = require('express-validator');

// user endpoint
router.get("/user", async (req,res)=>{
    // Find all users
    await db.User.findAll()
    .then((user) => {
        res.status(200).json({user})
    }).catch((err) =>{
        res.status(404).json({message : "Not Found"})
    })


    

});


router.post(
    '/user',
    // must be at least 5 chars long
    body('firstName').isLength({ min: 5 }),
    //must be at least 5 chars long
    body('lastName').matches(/^(?=.{5,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i),
    // username must be an email
    body('email').isEmail(),
    // role must be not null
    body('role').notEmpty(),

    async (req, res) => {
      // Finds the validation errors in this request and wraps them in an object with handy functions
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      await db.User.findOrCreate({
        where: { email: req.body.email },
        defaults: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            role: req.body.role
        }
      }).then(user =>  res.status(201).json(user));
    },
  );

  module.exports = router