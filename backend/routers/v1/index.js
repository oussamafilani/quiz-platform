const express = require("express");


const router = express.Router()


const Question = require('./Question');
const Student = require('./Student');
const Subject = require('./Subject');
const Teacher = require('./Teacher');
const User = require('./User');

router.use("/", Question);
router.use("/", Student);
router.use("/", Subject);
router.use("/", Teacher);
router.use("/", User);

module.exports = router

