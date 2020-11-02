const express=require('express')
const app=express();
const rootRouter=require('./api/index')


// 静态资源服务器
app.use(express.static('./views/abc/'))


 
app.use('/api',rootRouter)


app.listen(2003,()=>{
    console.log('server is gogogo 2003');
    
})    