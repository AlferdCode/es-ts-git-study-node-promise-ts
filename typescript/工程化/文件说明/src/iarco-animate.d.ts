interface cssStyle {
    width?:number
    height?:number
    opacity?:number
    [propNmae:string]:string
}
interface optios {
    begin:cssStyle,
    end:cssStyle,
    onstart?:()=>void
    onmove?:()=>void
    onend?:()=>vo
}
declare module 'iarco-animate' {
    namespace myPlugin {
        namespace myPlugin {
            class Animate{
                constructor(params:options)
                start():void
                end():void
            }
        }
   
    }
    export = myPlugin
}