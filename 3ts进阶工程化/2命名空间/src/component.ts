namespace Component {
    export class Header{
        constructor(){
            console.log('header');
        }
        init(){
            console.log('init run header');
            
        }
    }

    export class Content{
        constructor(){
            console.log('contnet');
            
        }
    }
    export class Footer{
        constructor(){
            console.log('Footer');
        }
        init(){
            console.log('foot init run');
        }
    }

    export namespace Child {
        export interface Test {
            name:string
        }
    }
}