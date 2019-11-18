import {Health} from './../src/tam.js';

describe('Health', () => {
  jest.useFakeTimers();
  let health;

  beforeEach(function() {
    health = new Health("Florian", "Wood Elf");
    health.setHealth();
    health.makeMess();
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

  test('health degrades 1 every second', () => {
    jest.advanceTimersByTime(50001);
    expect(health.healthLevel).toEqual(50);
  })

  test('health degrades by 2 every second if mess is greater than 50', () => {
    jest.clearAllTimers();
    health.mess = 101;
    health.setHealth();
    console.log(health.healthLevel);
    jest.advanceTimersByTime(10000);
    console.log(health.mess, health.healthLevel);
    expect(health.healthLevel).toEqual(80);
  })

  test('mess increases by 1 every 4 seconds', () => {
    jest.advanceTimersByTime(20001);
    expect(health.mess).toEqual(5);
  })

  test('affection increases health by 10', () => {
    jest.advanceTimersByTime(50001);
    health.affection();
    expect(health.healthLevel).toEqual(60);
  })

  test('feeding adds 20 to health and 10 to mess', () => {
      jest.advanceTimersByTime(50001);
      health.feed();
      expect(health.healthLevel).toEqual(70);
      expect(health.mess).toEqual(22);
  });


});
