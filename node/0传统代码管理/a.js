var a= '123';


if(!window.myPlugin){
    myPlugin = {}
}
myPlugin.bar = (function(){
    var b = 1234;
    return function bar(){
        return b
    }
})()