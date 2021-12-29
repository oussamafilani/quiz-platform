const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const { QueryTypes } = require('sequelize');
const db = require('../models');


const {validationResult } = require('express-validator');





module.exports={

    GatAll: async (req,res)=>{
        // Find all users
        await db.User.findAll()
        .then((user) => {
            res.status(200).json({user})
        }).catch((err) =>{
            res.status(404).json({message : "Not Found"})
        }) 
    },

    Create: async (req, res) => {

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
    },

    // Delete: async (req, res) => {},

    // Update: async (req, res) => {},

}