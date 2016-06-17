import {Task} from './task.entity.ts';

describe('Task', () => {
  it('should be instanciable', () => {
    expect(new Task()).toBeDefined();
  });
  it('should have a null startTime and a null endTime', () => {
    const task: Task = new Task();
    expect(task.startTime).toBeDefined();
    expect(task.endTime).toBeDefined();
    expect(task.startTime).toBeNull();
    expect(task.endTime).toBeNull();
  });
  it('should be able to start itself', () => {
    const task: Task = new Task();
    task.start();
    expect(task.startTime).not.toBeNull();
  });
  it('should be able to stop itself', () => {
    const task: Task = new Task();
    task.start();
    expect(task.startTime).not.toBeNull();
    expect(task.endTime).toBeNull();
    task.stop();
    expect(task.startTime).not.toBeNull();
    expect(task.endTime).not.toBeNull();
  });
  it('should\'t be able to stop if not started', () => {
    const task: Task = new Task();
    expect(task.stop.bind(task)).toThrow(new Error('Cannot stop a task that didn\'t start'));
  });
  it('should\'t be able to start if already started', () => {
    const task: Task = new Task();
    task.start();
    expect(task.start.bind(task)).toThrow(new Error('Cannot start a task that already started'));
    const task2: Task = new Task();
    task2.start();
    task2.stop();
    expect(task2.start.bind(task)).toThrow(new Error('Cannot start a task that already started'));
  });
});
