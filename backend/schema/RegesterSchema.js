const { body} = require('express-validator');


const RegesterSchema = [
     // must be at least 5 chars long
     body('firstName').isLength({ min: 5 }).withMessage('must be 5 or more'),
     //must be at least 5 chars long
     body('lastName').matches(/^(?=.{5,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i),
     // username must be an email
     body('email').isEmail(),
     // role must be not null
     body('role').notEmpty(),
]

module.exports = {RegesterSchema}
