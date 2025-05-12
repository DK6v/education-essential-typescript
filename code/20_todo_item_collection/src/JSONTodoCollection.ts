import { TodoItem } from "./TodoItem.js";
import { TodoCollection } from "./TodoCollection.js";
import { LowSync } from "lowdb";
import { JSONFileSync } from "lowdb/node"

type schemaType = {
    tasks: { id: number, task: string, completed: boolean } []
};

export class JSONTodoCollection extends TodoCollection {
    private database: LowSync<schemaType>;

    constructor(public userName: string, todoItems: TodoItem[] = []) {
        super(userName, []);
        
        const defaultData: schemaType = null;
        this.database = new LowSync(new JSONFileSync("todo.json"), defaultData);
        this.database.read();

        if (this.database.data == null) {
            todoItems.forEach(item => {
                console.log(`Add item ${item.id}`);
                this.itemMap.set(item.id, item)
            });
            
            this.database.data = { tasks: todoItems };
            this.database.write();
        }
        else {
            this.database.data.tasks.forEach(item => {
                this.itemMap.set(
                    item.id,
                    new TodoItem(item.id, item.task, item.completed)
                );
            })
        }
        console.log(this.database);
    }

    addTodo(task: string) : TodoItem {
        let result = super.addTodo(task);
        this.storeTasks();
        return result;
    }

    public markComplete(id: number, completed: boolean) : void {
        super.markComplete(id, completed);
        this.storeTasks();
    }

    public removeCompleted() : void {
        super.removeCompleted();
        this.storeTasks();
    }

    private storeTasks(): void {
        this.database.data.tasks = [ ... this.itemMap.values() ];
        this.database.write();
    }
}