import {Health} from './../src/tam.js';

describe('Health', () => {
  jest.useFakeTimers();
  let health;

  beforeEach(function() {
    health = new Health("Florian", "Wood Elf");
    health.setHealth();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should start with a name, species, and health level of 100', () => {
    expect(health.name).toEqual("Florian");
    expect(health.species).toEqual("Wood Elf");
    expect(health.healthLevel).toEqual(100);
    expect(health.mess).toEqual(0);
  });
});
