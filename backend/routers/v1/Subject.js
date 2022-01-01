const express = require("express");
const router = express.Router()
// user endpoint
router.get("/subjects", async (req,res)=>{ res.status(200).send({message:"hello Subject"})});
router.post("/subjects", async (req,res)=>{ res.status(200).send({message:"hello Subject"})});
router.put("/subjects", async (req,res)=>{ res.status(200).send({message:"hello Subject"})});
router.delete("/subjects", async (req,res)=>{ res.status(200).send({message:"hello Subject"})});


  module.exports = router