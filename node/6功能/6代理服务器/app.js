import express from 'express'
const app = express();
const router = express.Router()
app.listen(3000,()=>{
    console.log('3000 running');
})

router.get('/b', function (req, res, next) {
    res.json({
        code:200,
        data:'3000服务'
    })
})

app.use(function(req,res,next){
    console.log('有人访问服务3000');
    next()
})
app.use(router)

console.log('test node mon ');