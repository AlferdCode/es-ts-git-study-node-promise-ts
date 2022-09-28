(function(self,fectory){
    // 因为typeoof 后面的变量是百分之百安全的是不会出错的；
    // 在暂时性死区中 typeof 不是百分百安全的
    if(typeof module==='object' && typeof module.exports==='object'){
        // 当前环境为commonjs环境
        console.log('node commmonjs');
        module.exports = fectory();
    }else if(typeof define==='function' && define.amd){
        // AMD环境
        console.log('AMD require.js');
        define(factoty)
    }else{
        // 什么环境都不是 直接放在全局上
        console.log('window 没有模块化境');
        self.umdModule = fectory();
    }
})(this,function(){
    return function(){
        return Math.random();
    }
})