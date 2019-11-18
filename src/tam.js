
export class Health {
  constructor(name,species) {
    this.name = name;
    this.species = species;
    this.healthLevel <= 100;
    this.mess = 0;
  }

  setHealth() {
    if (this.mess > 100) {
      setInterval(() => {
        this.healthLevel--;
      }, 500);
    } else {
      let healthTimer = setInterval(() => {
        this.healthLevel--;
      }, 1000);
    }
    if (this.healthLevel > 100) {
      this.healthLevel = 100;
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
    let sleepTimer = setInterval(() => {
      this.healthLevel ++;
    }, 500);
    setTimeout(() => {
      clearInterval(sleepTimer);
    },100000);
    if (this.healthLevel > 100) {
      this.healthLevel = 100;
    }
  }

 walk() {
   let min = Math.ceil(11);
       let max = Math.floor(0);
       let walkRisk =  Math.floor(Math.random() * (max - min + 1)) + min;
       if(walkRisk<7) {
         this.healthLevel += 40;
       } else if (walkRisk > 9) {
         this.healthLevel -= 20;
       } else {
         return;
       }
 }


}
