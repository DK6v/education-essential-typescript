export class HelloWorld {
    constructor (
        public name: string) {}

    hello() : string {
        return `Hello ${this.name}!`; 
    }
}