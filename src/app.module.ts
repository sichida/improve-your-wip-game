// import 'jquery';
import angular from 'angular';
import 'angular-ui-router';
import 'angular-resource';

import gameView from './features/game/game.view.html';

import {GameController} from './features/game/game.controller.ts';
import {TaskComponentDefinition} from './features/task/task.component.ts';

angular.module('wip', ['ui.router'])
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider.state('default', {
            url: '/',
            template: gameView,
            controller: GameController,
            controllerAs: 'ctrl'
        });
        $urlRouterProvider.when('', '/');
    })
    .component('task', TaskComponentDefinition);
