import myPlugin from 'iarco-animate';

let Animate = myPlugin.myPlugin.Animate;

let ani = new Animate({
    begin:{},
    end:{},
    onstart(){},

})
ani.start()

setTimeout(()=>{
  ani.end()
},1000)