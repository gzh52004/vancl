const {Router,urlencoded,json}=require('express');
const router =Router();
const goodsRouter=require('./goods');
const regRouter=require('./reg');
const cors = require('./cors');
const sortRouter=require('./sort')
const listsRouter=require('./lists');
const selfRouter=require('./self');
router.use(cors)
// 数据格式化中间件
router.use(urlencoded(),json());
router.use('/reg',regRouter)
router.use('/goods',goodsRouter)
router.use('/sort',sortRouter)
router.use('/lists',listsRouter)
router.use('/self',selfRouter)
module.exports=router;

router.use(urlencoded({ extended: false }), json())