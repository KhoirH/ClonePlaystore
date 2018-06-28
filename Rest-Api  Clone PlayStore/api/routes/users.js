const express = require("express");
const router  = express.Router();

const User = require("../model/users");

router.get("/", (req , res , next ) =>{
  User
  .find({}).then(function(result){
    res.send(result)
  })
})

router.get("/:userId", (req , res , next ) =>{
  User
  .findOne({_id : req.params.userId}).then(function(result){
    res.send(result)
  })
})

router.post("/", (req , res , next ) =>{
  User
    .create(req.body)
    .then(function(result){
      res.send(result);
    })
    .catch(next);  
}) 

router.delete("/:userId", (req , res , next ) =>{
   User
   .findOneAndRemove({_id: req.params.userId })
   .then(function(result){
     res.send("ok")
   }) 
})

router.put("/:userId", (req , res , next) =>{
    User
    .findOneAndUpdate({_id : req.params.userId } , req.body)
    .then(function(result){
      User.findOne({_id : req.params.userId}).then(function(u){
        res.send(u)
      })
    });
})

module.exports  = router ;