export class Health {
  constructor(name,species) {
    this.name = name;
    this.species = species;
    this.healthLevel = 100;
    this.mess = 0;
  }

  setHealth() {
    setInterval(() => {
      this.healthLevel--;
    }, 1000);
  }
}
