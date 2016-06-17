import ng from 'angular';
import {Task} from './task.entity.html';
import view from './task.view.html';

class TaskController {
    constructor() {
    }
}

export const TaskComponentDefinition: ng.IComponentOptions = {
    bindings: {
    },
    template: view,
    controller: TaskController,
    controllerAs: 'ctrl'
};