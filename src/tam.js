export class Health {
  constructor(name,species) {
    this.name = name;
    this.species = species;
    this.healthLevel = 100;
    this.mess = 0;
  }

  setHealth() {
    if (this.mess > 100) {
      setInterval(() => {
        this.healthLevel--;
      }, 500);
    } else {
      setInterval(() => {
        this.healthLevel--;
      }, 1000);
    }
  }

  makeMess() {
    setInterval(() => {
      this.mess++;
    }, 4000);
  }


  affection() {
    this.healthLevel += 10;
  }

  feed() {
    this.healthLevel += 20;
    this.mess += 10;
  }

  sleep() {
    setInterval(() => {
      this.healthLevel ++;
    }, 500)
  }
}
