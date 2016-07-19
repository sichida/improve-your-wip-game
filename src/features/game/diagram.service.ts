import {Task} from '../task/task.entity.ts';
import angular from 'angular';

export class DiagramOptions {
    responsive: boolean = true;
    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: boolean = true;
    //String - Colour of the grid lines
    scaleGridLineColor: string = "rgba(0,0,0,.05)";
    //Number - Width of the grid lines
    scaleGridLineWidth: number = 1;
    //Boolean - Whether the line is curved between points
    bezierCurve: boolean = true;
    //Number - Tension of the bezier curve between points
    bezierCurveTension: number = 0.4;
    //Boolean - Whether to show a dot for each point
    pointDot: boolean = true;
    //Number - Radius of each point dot in pixels
    pointDotRadius: number = 4;
    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth: number = 1;
    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius: number = 20;
    //Boolean - Whether to show a stroke for datasets
    datasetStroke: boolean = true;
    //Number - Pixel width of dataset stroke
    datasetStrokeWidth: number = 2;
    //Boolean - Whether to fill the dataset with a colour
    datasetFill: boolean = true;
    //String - A legend template
    legendTemplate: string = '<ul class="tc-chart-js-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>';

    // Function - on animation progress
    onAnimationProgress() {

    }
    // Function - on animation complete
    onAnimationComplete() {

    }
}

export class DiagramService {
    static convertSecond(input): string {
        var minutes = parseInt(input / 60, 10);
        var seconds = input % 60;
        return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }

    static getTimes(tasks: Array<Task>, increment: number): Array<Date> {
        let startDate: Date = null;
        let endDate: Date = null;
        for (let task of tasks) {
            if (null === startDate || task.startTime < startDate) {
                startDate = angular.copy(task.startTime);
            }
            if (null === endDate || task.endTime > endDate) {
                endDate = angular.copy(task.endTime);
            }
        }
        const abscissa = new Array<Date>();
        while (startDate < endDate) {
            abscissa.push(angular.copy(startDate));
            startDate.setSeconds(startDate.getSeconds() + increment);
        }
        return abscissa;
    }
    static computeTodoPoints(tasks: Array<Task>, times: Array<Date>) {
        const todoList: Array<number> = new Array<number>();
        for (const date of times) {
            todoList.push(tasks.length);
        }
        return todoList;
    }
    static computeInProgressPoints(tasks: Array<Task>, times: Array<Date>) {
        const inProgressList: Array<number> = new Array<number>();
        for (const marker of times) {
            let total: number = 0;
            for (const task of tasks) {
                if (task.startTime.getTime() <= marker.getTime()) {
                    total++;
                }
            }
            inProgressList.push(total);
        }
        return inProgressList;
    }
    static computeDonePoints(tasks: Array<Task>, times: Array<Date>) {
        const doneList: Array<number> = new Array<number>();
        for (const marker of times) {
            let total: number = 0;
            for (const task of tasks) {
                if (task.endTime.getTime() <= marker.getTime()) {
                    total++;
                }
            }
            doneList.push(total);
        }
        return doneList;
    }
    static computeWIP(tasks: Array<Task>, times: Array<Date>) {
        const wipList: Array<number> = new Array<number>();
        for (const marker of times) {
            let total: number = 0;
            for (const task of tasks) {
                if (task.startTime.getTime() <= marker.getTime() && task.endTime.getTime() > marker.getTime()) {
                    total++;
                }
            }
            wipList.push(total);
        }
        return wipList;
    }
}