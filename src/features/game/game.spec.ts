import {GameController} from './game.controller.ts';

describe('GameController', () => {
  it('should be instanciable', () => {
    expect(new GameController()).toBeDefined();
  });
});
