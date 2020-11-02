const express = require("express");
const router = express.Router();
const { formatData } = require('./tools')
const mongo = require('../mongo');






// 获取

router.get('/', async (req, res) => { 
  
  const result = await mongo.find("goods", {})
  console.log(result)
  res.send(result)
})



// module.exports = router;
// router.get('/', async (req, res) => {
    
//   const result = await mongo.find('goods', {})
//   res.send(result)
// })

module.exports = router