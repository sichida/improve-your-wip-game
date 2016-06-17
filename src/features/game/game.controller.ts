import {Task} from '../task/task.entity.ts';

export class GameController {
    tasks: Array<Task>;

    constructor() {
        this.tasks = new Array<Task>();
        for (let i:int = 1; i <= 10; i++) {
            this.tasks.push(new Task(i));
        }
    }
}