import angular from 'angular';
import 'angular-ui-router';
import 'angular-resource';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css!';
import 'chart.js/dist/Chart.js';
import 'chart.js/dist/Chart.bundle.js';
import 'tc-angular-chartjs';

import gameView from './features/game/game.view.html';

import {GameController} from './features/game/game.controller.ts';
import {TaskComponentDefinition} from './features/task/task.component.ts';

angular.module('wip', ['ui.router', 'tc.chartjs'])
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider.state('default', {
            url: '/',
            template: gameView,
            controller: GameController,
            controllerAs: 'ctrl'
        });
        $urlRouterProvider.when('', '/');
    })
    .component('task', TaskComponentDefinition)
    ;
