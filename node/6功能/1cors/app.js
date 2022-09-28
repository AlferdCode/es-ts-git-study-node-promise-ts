import express from 'express'
import cors from 'cors'
const app = express();
const router = express.Router()
app.listen(3000, () => {
    console.log('3000 running');
})

router.get('/products/:id', function (req, res, next) {
    res.json({
        code:200,
    
    })
})

// 必须要在 use(router) 之前写
app.use(cors())
app.use(router)

console.log('test node mon ');