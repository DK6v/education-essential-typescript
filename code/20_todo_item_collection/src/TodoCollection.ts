import { TodoItem } from "./TodoItem.js";

type ItemCounts = {
    total: number,
    incomplete: number,
};

export class TodoCollection {
    private nextId: number = 1;
    protected itemMap = new Map<number, TodoItem>();

    constructor(public userName: string, todoItems: TodoItem[] = []) {
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }

    addTodo(task: string) : TodoItem {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        };
        let item = new TodoItem(this.nextId, task);
        this.itemMap.set(this.nextId, item);
        return item;
    }

    getTodoById(id: number) : TodoItem {
        return this.itemMap.get(id);
    }

    markComplete(id: number, completed: boolean) {
        const item = this.getTodoById(id);
        if (item) {
            item.completed = completed;
        }
    }

    getTodoItems(showCompleted: boolean = true) : TodoItem[] {
        let retval = 
            [...this.itemMap.values()]
            .filter(item => (showCompleted || !item.completed));
        return retval;
    }

    removeCompleted() : void {
        for (const [id, item] of this.itemMap) {
            if (item.completed) {
                this.itemMap.delete(id);
            }        
        }
    }

    getItemCounts() : ItemCounts {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length,
        };
    }

    print(collection: TodoItem[] = [...this.itemMap.values()]) : void {
        for (const item of collection) {
            item.print();
        }
    }
}
