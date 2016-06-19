import ng from 'angular';
import {Task} from './task.entity.html';
import view from './task.view.html';

class TaskController {
    constructor(private dateFilter: ng.IFilterService) {
    }

    _convertSecond(input) {
        var minutes = parseInt(input / 60, 10);
        var seconds = input % 60;
        return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }
    displayStartTime(task): String {
        if (this.startedTime) {
            return this._convertSecond(Math.round((task.startTime.getTime() - this.startedTime.getTime())/1000));
        }
        return this.dateFilter(task.startTime, 'HH:mm:ss');
    }
    displayEndTime(task): String {
        if (this.startedTime) {
            return this._convertSecond(Math.round((task.endTime.getTime() - this.startedTime.getTime())/1000));
        }
    }
}

export const TaskComponentDefinition: ng.IComponentOptions = {
    bindings: {
        task: '=data',
        startedTime: '<'
    },
    template: view,
    controller: TaskController,
    controllerAs: 'ctrl'
};