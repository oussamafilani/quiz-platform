const express = require("express");
const router = express.Router()
// user endpoint
router.get("/Teacher", async (req,res)=>{
    res.status(200).send({message:"hello Teacher"})
});


module.exports = router