import $ from 'iarco-animate'

let Animate = $.myPlugin.Animate
var animate = new Animate({
    begin:{
        width:100
    },
    end:{
        widht:500
    },
    onmove:function(){
    }
})

animate.start()

setTimeout(()=>{
    animate.end()
},1000)