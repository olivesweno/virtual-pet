minAge = 0;
minHunger = 0;
maxFitness = 10;

function Pet(name) {
    this.name = name;
    this.age = minAge;
    this.fitness = maxFitness;
    this.hunger = minHunger;
};

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.fitness < 10 && this.hunger > 0;
    }
};

Pet.prototype.growUp = function() {
        ageIncrements = 1;
        fitnessIncrements = 3;
        hungerIncrements = 5;

        this.age += ageIncrements;
        this.fitness -= fitnessIncrements;
        this.hunger += hungerIncrements;
    };

Pet.prototype.walk = function() {
        const fitnessIncreaseWalk = 4;
        this.fitness += fitnessIncreaseWalk;
        if(this.fitness >= maxFitness) {
            this.fitness = 10;
        }
    };

Pet.prototype.feed = function() {
    const hungerDecreaseFeed = 3;
    this.hunger -= hungerDecreaseFeed;
    if(this.hunger <= minHunger) {
        this.hunger = 0;
    }
};

Pet.prototype.checkup = function() {
    const needWalk = (this.fitness <= 3);
    const needFood = (this.hunger >= 5);
    
    if(needWalk && needFood) {
        return 'I am hungry AND I need a walk'
    } else if(needWalk) {
        return 'I need a walk'
    } else if(needFood) {
        return 'I am hungry'
    } else {
        return 'I feel great!'
    }
};



module.exports = Pet;