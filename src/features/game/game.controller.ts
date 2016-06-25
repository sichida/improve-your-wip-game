import {Task} from '../task/task.entity.ts';
import {DiagramOptions} from './diagram.service.ts';

export class GameController {
    tasks: Array<Task>;
    stopIndex: Number = -1;
    startTime: Date = null;

    constructor() {
        this.tasks = new Array<Task>();

        this.data = {
            labels: ['00:00', '00:15', '00:30', '00:45', '01:00', '01:15', '01:30'],
            datasets: [
                {
                    label: 'TODO',
                    fillColor: 'rgba(220,220,220,0.2)',
                    strokeColor: 'rgba(220,220,220,1)',
                    pointColor: 'rgba(220,220,220,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220,220,220,1)',
                    data: [15,15,15,15,15,15,15,15]
                },
                {
                    label: 'In progress',
                    fillColor: 'rgba(151,187,205,0.2)',
                    strokeColor: 'rgba(151,187,205,1)',
                    pointColor: 'rgba(151,187,205,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(151,187,205,1)',
                    data: [0,2,5,8,9,11,14,15]
                },
                {
                    label: 'Done',
                    fillColor: 'rgba(151,187,205,0.2)',
                    strokeColor: 'rgba(151,187,205,1)',
                    pointColor: 'rgba(151,187,205,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(151,187,205,1)',
                    data: [0,0,2,4,8,10,12,15]
                }
            ]
        };

        this.options = new DiagramOptions();
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