// 结局:handler 函数臃肿问题. 
import {login,register } from './user.js'
import { getShoplist,detail,addshop,delshop } from './shop.js'
export default [
    {
        url: '/login',
        method: 'get',
        // 问题:handler函数中约为逻辑,导致 config.js 过于臃肿问题???
        handler:login
    }, {
        url:'/register',
        method:"get",
        handler:register
    },{
        url:'/goodlist',
        method:"get",
        handler: getShoplist
    }, {
        url:'/detail',
        method:"get",
        handler: detail
    }, {
        url:'/addshop',
        method:"get",
        handler: addshop
    },{
        url:'/delshop',
        method:"get",
        handler: delshop
    },
]