interface CssStyle {
    width?:number
    height?:number
    opacity?:number
    [propName:string]:any
}
interface options {
    begin:CssStyle,
    end:CssStyle,
    onmove?:()=>void
    onstart?:()=>void
    onend?:()=>void

}
declare module 'iarco-animate' {
    namespace $ {
        namespace myPlugin {
            class Animate {
                constructor(params:options);
                start():void;
                end():void
            }
        }
    }
    export = $
}