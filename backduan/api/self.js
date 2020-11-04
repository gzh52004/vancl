const express = require("express");
const router=express.Router();
const mongo=require('../mongo');
// const { formatData } = require('./tools')



// router.get('/', async (req, res) => {
    
//     const result = await mongo.find('goods', {})
//     res.send(formatData({ data: result }))
// })

// module.exports = router

router.get('/', async (req, res) => { 
  
  const result = await mongo.find("mine", {})
  console.log(result)
  res.send(result)
})

  
  
  
  // module.exports = router;
  // router.get('/', async (req, res) => {
      
  //   const result = await mongo.find('goods', {})
  //   res.send(result)
  // })
  
  module.exports = router



















