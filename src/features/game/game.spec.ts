import {GameController} from './game.controller.ts';

describe('GameController', () => {
  it('should be instanciable', () => {
    expect(new GameController()).toBeDefined();
  });
  it('should start a task', () => {
    const ctrl = new GameController();
    expect(ctrl.tasks).toBeDefined();
    expect(ctrl.tasks.length).toEqual(0);
    ctrl.startTask();
    expect(ctrl.tasks.length).toEqual(1);
    expect(ctrl.tasks[0].startTime).toBeDefined();
    expect(ctrl.tasks[0].startTime).not.toBeNull();
    expect(ctrl.tasks[0].endTime).toBeDefined();
    expect(ctrl.tasks[0].endTime).toBeNull();
    expect(ctrl.startTime).toEqual(ctrl.tasks[0].startTime);
  });
  it('should start 10 tasks', () => {
    const ctrl = new GameController();
    expect(ctrl.tasks).toBeDefined();
    expect(ctrl.tasks.length).toEqual(0);
    for (let i = 0; i < 10; i++) {
      ctrl.startTask();
    }
    expect(ctrl.tasks.length).toEqual(10);
  });
  it('should stop a task', () => {
    const ctrl = new GameController();
    ctrl.startTask();
    ctrl.stopTask();
    expect(ctrl.tasks.length).toEqual(1);
    expect(ctrl.tasks[0].startTime).toBeDefined();
    expect(ctrl.tasks[0].startTime).not.toBeNull();
    expect(ctrl.tasks[0].endTime).toBeDefined();
    expect(ctrl.tasks[0].endTime).not.toBeNull();
  });
  it('shouldn\'t stop a non existing task', () => {
    const ctrl = new GameController();
    ctrl.startTask();
    ctrl.stopTask();
    expect(ctrl.stopTask.bind(ctrl)).toThrow();
    expect(ctrl.stopIndex).toEqual(0);
  });
});
