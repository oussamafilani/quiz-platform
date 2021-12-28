const express = require("express");
const router = express.Router()
// user endpoint
router.get("/Student", async (req,res)=>{
    res.status(200).send({message:"hello Student"})
});


  module.exports = router