import {
    login,
    register
} from './user.js'
import {
    getPageShopList,
    getTypeShoplist,
    getDeatail
} from './shop.js'
import {
    addShopCar
} from './shopcar.js'

// 默认的不需要路由权限配置的
export default [{
    path: '/login',
    method: 'get',
    handler: login,
}, {
    path: '/register',
    method: 'get',
    handler: register,
}, {
    path: '/goodlist',
    method: 'get',
    handler: getPageShopList,
}, {
    path: '/typeOneGoods',
    method: 'get',
    handler: getTypeShoplist,
}, {
    path: '/detail',
    method: 'get',
    handler: getDeatail,
} ]

// 配置需要token 权限验证的路由地址
export const outhorityRoutes = [{
    path: '/car',
    method: 'get',
    handler: addShopCar
}]