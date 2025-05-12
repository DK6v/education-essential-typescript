export class TodoItem {
    constructor (
        public id: number,
        public task: string,
        public completed: boolean = false ) {}

    public complete(complete: boolean) {
        this.completed = complete;
    }

    print() : void {
        console.log(`${this.id}\t${this.task} ${this.completed ? '(completed)' : ''}`);
    }
}
