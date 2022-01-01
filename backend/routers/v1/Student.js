const express = require("express");
const router = express.Router()
// user endpoint
router.get("/students", async (req,res)=>{res.status(200).send({message:"hello Student"})});
router.post("/students", async (req,res)=>{res.status(200).send({message:"hello Student"})});
router.put("/students", async (req,res)=>{res.status(200).send({message:"hello Student"})});
router.delete("/students", async (req,res)=>{res.status(200).send({message:"hello Student"})});




  module.exports = router