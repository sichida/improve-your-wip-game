import {Task} from '../task/task.entity.ts';

export class GameController {
    tasks: Array<Task>;
    stopIndex: Number = -1;
    startTime: Date = null;

    constructor() {
        this.tasks = new Array<Task>();
    }

    startTask() {
        const date: Date = new Date();
        if (this.tasks.length === 0) {
            this.startTime = date;
        }
        this.tasks.push(new Task(this.tasks.length + 1, date));
    }

    stopTask() {
        if (this.stopIndex === this.tasks.length - 1) {
            throw new Error("All tasks are already stoped");
        }
        this.tasks[++this.stopIndex].stop();
    }
    
    checkKeypress(event) {
        if (event.keyCode === 105) {
            this.startTask();
        } else if (event.keyCode === 111) {
            this.stopTask();
        }
    }
}