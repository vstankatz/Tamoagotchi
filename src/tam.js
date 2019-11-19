
export class Health {
  constructor(name,species) {
    this.name = name;
    this.species = species;
    this.healthLevel = 100;
    this.mess = 0;
  }

  setHealth() {
    if (this.healthLevel >= 100) {
      this.healthLevel = 100;
    }
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
    let sleepTimer = setInterval(() => {
      if(this.healthLevel >= 100) {
        clearInterval(sleepTimer)
        return;
      } else {
        this.healthLevel ++;
      }
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

  clean() {
    this.mess -= 10;
  }

  setPar() {
    if(this.healthLevel>100) {
      this.healthLevel = 100;
    } else if(this.healthLevel<0) {
      this.healthLevel = 0;
    }
    if(this.mess < 0) {
      this.mess = 0;
    } else if (this.mess>50){
      this.healthLevel--;
    }
  }

  doubleDecrease() {
    if (this.mess > 50) {
      setInterval(() => {
        this.healthLevel--;
      }, 500);
    }
  }

}
