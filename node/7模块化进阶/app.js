import express from 'express'
import routes,{outhorityRoutes} from './control/config.js'
import './model/db.js'
import { vertify } from './token.js'

const app = express();
const router = express.Router()


for(let k in routes){
    let route = routes[k];
    router[route.method](route.path,route.handler)
}

for(let k in outhorityRoutes){
    let route = outhorityRoutes[k];
    console.log(route);
    // 在走接口处理函数执行先执行vertigy
    router[route.method](route.path,vertify,route.handler)
}

// router.get('/aaa',function(req,res,next){next()},function(){})

app.use(router)
app.listen(9527)