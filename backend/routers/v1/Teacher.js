const express = require("express");
const router = express.Router()
// user endpoint
router.get("/teachers", async (req,res)=>{res.status(200).send({message:"hello Teacher"})});
router.post("/teachers", async (req,res)=>{res.status(200).send({message:"hello Teacher"})});
router.put("/teachers", async (req,res)=>{res.status(200).send({message:"hello Teacher"})});
router.delete("/teachers", async (req,res)=>{res.status(200).send({message:"hello Teacher"})});


module.exports = router