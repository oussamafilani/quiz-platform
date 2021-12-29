
const express = require("express");
const router = express.Router()
// user endpoint
router.get("/question", async (req,res)=>{res.status(200).send({message:"hello question"})});
router.post("/question", async (req,res)=>{res.status(200).send({message:"hello question"})});
router.put("/question", async (req,res)=>{res.status(200).send({message:"hello question"})});
router.delete("/question", async (req,res)=>{res.status(200).send({message:"hello question"})});


  module.exports = router