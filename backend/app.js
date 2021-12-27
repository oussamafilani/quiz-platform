const express = require("express");
require('dotenv').config();
const { QueryTypes } = require('sequelize');
const db = require('./models');

const { body, validationResult } = require('express-validator');



const port = process.env.PORT || 3000

// configure express
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


// index Page
app.get("/", async (req,res)=>{
     const users = await db.sequelize.query('SELECT * FROM public."Users"', { type: QueryTypes.SELECT });

  res.send(users);

});

// number para
app.get("/book/:id/:year/:month", async (req,res)=>{
    try {
    res.send(req.query);
    
} catch (error) {
    res.status(404).send({message : "Not Found"})

}

});

// user endpoint
app.get("/users", async (req,res)=>{
    // Find all users
    const users = await db.User.findAll()
    .then((users) => {
        res.status(200).json({users})
    }).catch((err) =>{
        res.status(404).json({message : "Not Found"})
    })
    res.send(users);

    

});

// app.post(
//     "/users"
//      // username must be an email
//     ,body('email').isEmail()
//     ,async (req,res)=>{
//     // Find all users
//     const users = await db.User.create({ 
//         firstName :  req.body.firstName,
//         lastName:  req.body.lastName,
//         email:  req.body.email
//     })
//     .then((users) => {
//         res.status(201).send({users})
//     }).catch((err) =>{
//         res.status(404).send({Message : "Bad request"})
//     })
//     // res.send( req.body);

// });

app.post(
    '/users',
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

app.listen(port, console.log(`App Running on http://localhost:${port }`));
