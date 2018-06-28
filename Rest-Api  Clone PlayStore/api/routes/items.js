const express = require("express");
const router  = express.Router();

const Item = require("../model/items");

router.get("/", (req , res , next ) =>{
    Item
    .find()
    .populate("images")
    .then(function(result){
      res.send(result)
    })
  })
router.get("/:itemId", (req , res , next ) =>{
  Item
  .find({_id : req.params.itemId })
  .populate({path: "comments images" , populate : { path: "_userId" , select : "email username"}} )
  .then(function(result){
    res.send(result)
  })
})
  router.post("/", (req , res , next ) =>{
   
    Item
      .create(req.body)
      .then(function(result){
        res.send(result);
      })
      .catch(next);  
  }) 
  
  router.delete("/:itemId", (req , res , next ) =>{
     Item
     .findOneAndRemove({_id: req.params.itemId })
     .then(function(result){
       res.send(result)
     }) 
  })
  
  router.put("/:itemId", (req , res , next) =>{
      Item
      .findOneAndUpdate({_id : req.params.itemId } , req.body)
      .then(function(result){
        Item.findOne({_id : req.params.itemId}).then(function(u){
          res.send(u)
        })
      });
  })

module.exports  = router ;