import ng from 'angular';
import {Task} from './task.entity.html';
import view from './task.view.html';
import {DiagramService} from '../game/diagram.service.ts';

class TaskController {
    startedTime:Date;

    constructor(private dateFilter: ng.IFilterService) {
    }

    displayStartTime(task): String {
        if (this.startedTime) {
            return DiagramService.convertSecond(Math.round((task.startTime.getTime() - this.startedTime.getTime())/1000));
        }
        return this.dateFilter(task.startTime, 'HH:mm:ss');
    }
    displayEndTime(task): String {
        if (this.startedTime) {
            return DiagramService.convertSecond(Math.round((task.endTime.getTime() - this.startedTime.getTime())/1000));
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