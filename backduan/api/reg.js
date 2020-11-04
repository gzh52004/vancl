const express = require("express");
const router = express.Router();
const { formatData } = require('./tools')
const mongo = require('../mongo');






// 获取

router.get('/', async (req, res) => {
  let { username,password } = req.query;
  const result = await mongo.find('login', { username,password});
  
  if (result.length > 0) {
      res.send(formatData({data:result}))

  } else {
    res.send(formatData({ code: 0 }))
  }
})








module.exports = router;