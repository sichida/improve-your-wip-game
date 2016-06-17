import {Task} from './task.entity.ts';

describe('Task', () => {
  it('should be instanciable', () => {
    expect(new Task()).toBeDefined();
  });
});
