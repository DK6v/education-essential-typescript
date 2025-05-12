export class HelloWorld {
    constructor (
        public name: string) {}

    hello() : string {
        return `Hello ${this.name}!`; 
    }
}

console.log(new HelloWorld("USER").hello());
