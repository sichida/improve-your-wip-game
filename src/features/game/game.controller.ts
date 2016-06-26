import angular from 'angular';
import {Task} from '../task/task.entity.ts';
import {DiagramOptions, DiagramService} from './diagram.service.ts';

export class GameController {
    tasks: Array<Task>;
    stopIndex: number = -1;
    startTime: Date = null;
    chartOptions: DiagramOptions;
    showReport:boolean;

    constructor() {
        this.tasks = new Array<Task>();
        this.chartOptions = new DiagramOptions();
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

    _areTasksFinished() {
        if (this.tasks.length === 0) {
            return false;
        }
        for (let task of this.tasks) {
            if (task.endTime === null) {
                return false;
            }
        }
        return true;
    }
    computeReport() {
        if (!this._areTasksFinished()) {
            this.showReport = false;
        } else {
            this.showReport = true;
        }
        const times = DiagramService.getTimes(this.tasks, 5);
        this.data = {
            labels: times.map(date => DiagramService.convertSecond(Math.round((date.getTime() - this.startTime.getTime()) / 1000))),
            datasets: [
                {
                    label: 'TODO',
                    fillColor: 'rgba(220,220,220,0.2)',
                    strokeColor: 'rgba(220,220,220,1)',
                    pointColor: 'rgba(220,220,220,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220,220,220,1)',
                    data: DiagramService.computeTodoPoints(this.tasks, times)
                },
                {
                    label: 'In progress',
                    fillColor: 'rgba(151,187,205,0.2)',
                    strokeColor: 'rgba(151,187,205,1)',
                    pointColor: 'rgba(151,187,205,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(151,187,205,1)',
                    data: DiagramService.computeInProgressPoints(this.tasks, times)
                },
                {
                    label: 'Done',
                    fillColor: 'rgba(151,187,205,0.2)',
                    strokeColor: 'rgba(151,187,205,1)',
                    pointColor: 'rgba(151,187,205,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(151,187,205,1)',
                    data: DiagramService.computeDonePoints(this.tasks, times)
                }
            ]
        };
    }
}