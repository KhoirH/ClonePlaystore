const express = require("express");
const router  = express.Router();

const comments = require("../model/comments");

router.get("/", (req , res , next ) =>{
    comments
    .find()
    .populate("_userId")
    .then(function(result){
      res.send(result)
    })
  })

router.get("/:itemId", (req , res , next ) =>{
  comments
  .find({_itemId : req.params.commentId}).then(function(result){
    res.send(result)
  })
})
router.post("/", (req , res , next ) =>{
    comments
      .create(req.body)
      .then(function(result){
        res.send(result);
      })
      .catch(next);  
  }) 
  
router.delete("/:commentId", (req , res , next ) =>{
     comments
     .findOneAndRemove({_id: req.params.commentId })
     .then(function(result){
       res.send(result)
     }) 
  })
  
router.put("/:commentId", (req , res , next) =>{
      comments
      .findOneAndUpdate({_id : req.params.commentId } , req.body)
      .then(function(result){
        comments.findOne({_id : req.params.commentId}).then(function(u){
          res.send(u)
        })
      });
  })

module.exports  = router ;