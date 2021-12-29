const express = require("express");
const router = express.Router()
// user endpoint
router.get("/Subject", async (req,res)=>{ res.status(200).send({message:"hello Subject"})});
router.post("/Subject", async (req,res)=>{ res.status(200).send({message:"hello Subject"})});
router.put("/Subject", async (req,res)=>{ res.status(200).send({message:"hello Subject"})});
router.delete("/Subject", async (req,res)=>{ res.status(200).send({message:"hello Subject"})});


  module.exports = router