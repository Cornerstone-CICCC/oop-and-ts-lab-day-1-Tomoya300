class Animal {
    #name
    #species
    #energy
    static remainingAnimals = 0

    constructor(name, species) {
        this.#name = name
        this.#species = species
        this.#energy = 0

        if (this.#energy > 0) {
            Animal.remainingAnimals++
        }
    }

    getName() {
        return this.#name
    }

    setName(newName) {
        return this.#name = newName
    }

    getSpecies()  {
        return this.#species
    }

    setSpecies(newSpecies) {
        return this.#species = newSpecies
    }

    getEnergy() {
        return this.#energy
    }

    setEnergy(newEnergy) {
        if (this.#energy <= 0 && newEnergy > 0) {
            Animal.remainingAnimals++
        } else if (this.#energy > 0 && newEnergy <= 0) {
            Animal.remainingAnimals--
        }
        this.#energy = newEnergy
    }

    attack(target) {
        const currentEnergy = target.#energy
        const wasZeroEnergy = target.#energy <= 0
        if (this.#energy <= 0) {
            console.log(`${this.#name} has not sufficient energy. ${this.#name} cannot attack!`)
        } else if (wasZeroEnergy) {
            console.log(`${target.#name} was already defeated. ${this.#name} cannot attack!`)
        } else {
            target.#energy -= 20
            console.log(`${this.#name} inflicted ${currentEnergy - target.#energy} damage on ${target.#name}.`)
        }

        if (currentEnergy > 0 && target.#energy <= 0) {
            console.log(`${target.#name} was defeated by ${this.#name}.`)
            Animal.remainingAnimals--
        }
    }

    eat() {
        const currentEnergy = this.#energy
        const wasZeroEnergy = this.#energy === 0
        this.#energy += 10
        console.log(`${this.#name} ate something, gaining ${this.#energy - currentEnergy} energy.`)
        
        if (wasZeroEnergy && this.#energy > 0) {
            Animal.remainingAnimals++
        }
    }

    checkStatus() {
        return `${this.#name} has ${this.#energy} energy left.`
    }
}

class Bird extends Animal {
    #canFly

    constructor(name, species, canFly) {
        super(name, species)        
        this.#canFly = canFly
        this.setEnergy(100)
    }

    getCanFly() {
        return this.#canFly
    }

    setCanFly(newCanFly) {
        return this.#canFly = newCanFly 
    }

    attack(target) {
        const currentEnergy = target.getEnergy()
        const wasZeroEnergy = target.getEnergy() <= 0
        if (this.getEnergy() <= 0) {
            console.log(`${this.getName()} has not sufficient energy. ${this.getName()} cannot attack!`)
        } else if (wasZeroEnergy) {
            console.log(`${target.getName()} was already defeated. ${this.getName()} cannot attack!`)
        } else {
            target.setEnergy(target.getEnergy() - 20)
            console.log(`${this.getName()} pecked ${target.getName()}, inflicting ${currentEnergy - target.getEnergy()} damage on ${target.getName()}.`)
        }

        if (currentEnergy > 0 && target.getEnergy() <= 0) {
            console.log(`${target.getName()} was defeated by ${this.getName()}.`)
        }
    }
}

class Mammal extends Animal {
    #furColor

    constructor(name, species, furColor) {
        super(name, species)
        this.#furColor = furColor
        this.setEnergy(200)
    }

    getFurColor() {
        return this.#furColor
    }

    setFurColor(newFurColor) {
        return this.#furColor = newFurColor
    }

    attack(target) {
        const currentEnergy = target.getEnergy()
        const wasZeroEnergy = target.getEnergy() <= 0
        if (this.getEnergy() <= 0) {
            console.log(`${this.getName()} has not sufficient energy. ${this.getName()} cannot attack!`)
        } else if (wasZeroEnergy) {
            console.log(`${target.getName()} was already defeated. ${this.getName()} cannot attack!`)
        } else {
            target.setEnergy(target.getEnergy() - 50)
            console.log(`${this.getName()} raked ${target.getName()} with the claws, inflicting ${currentEnergy - target.getEnergy()} damage on ${target.getName()}.`)
        }

        if (currentEnergy > 0 && target.getEnergy() <= 0) {
            console.log(`${target.getName()} was defeated by ${this.getName()}.`)
        }
    }

    eat() {
        const currentEnergy = this.getEnergy()
        const wasZeroEnergy = this.getEnergy() === 0
        this.setEnergy(this.getEnergy() + 20)
        console.log(`${this.getName()} ate something, gaining ${this.getEnergy() - currentEnergy} energy.`)
        
        // if (wasZeroEnergy && this.getEnergy() > 0) {
        //     Animal.remainingAnimals++
        // }
    }
}

class Reptile extends Animal {
    #coldBlooded

    constructor(name, species, coldBlooded) {
        super(name, species)
        this.#coldBlooded = coldBlooded
        this.setEnergy(100)
    }

    getColdBlooded() {
        return this.#coldBlooded
    }

    setColdBlooded(newColdBlooded) {
        return this.#coldBlooded = newColdBlooded
    }

    attack(target) {
        const currentEnergy = target.getEnergy()
        const wasZeroEnergy = target.getEnergy() <= 0
        if (this.getEnergy() <= 0) {
            console.log(`${this.getName()} has not sufficient energy. ${this.getName()} cannot attack!`)
        } else if (wasZeroEnergy) {
            console.log(`${target.getName()} was already defeated. ${this.getName()} cannot attack!`)
        } else {
            target.setEnergy(target.getEnergy() - 30)
            console.log(`${this.getName()} bit ${target.getName()}, inflicting ${currentEnergy - target.getEnergy()} damage on ${target.getName()}.`)
        }

        if (currentEnergy > 0 && target.getEnergy() <= 0) {
            console.log(`${target.getName()} was defeated by ${this.getName()}.`)
        }
    }

    eat() {
        const currentEnergy = this.getEnergy()
        const wasZeroEnergy = this.getEnergy() === 0
        this.setEnergy(this.getEnergy() + 15)
        console.log(`${this.getName()} ate something, gaining ${this.getEnergy() - currentEnergy} energy.`)
        
        // if (wasZeroEnergy && this.getEnergy() > 0) {
        //     Animal.remainingAnimals++
        // }
    }
}


// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.getName()}, Species: ${eagle.getSpecies()}, Can Fly: ${eagle.getCanFly()}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.getName()}, Species: ${lion.getSpecies()}, Fur Color: ${lion.getFurColor()}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.getName()}, Species: ${snake.getSpecies()}, Cold-Blooded: ${snake.getColdBlooded()}`);

console.log(eagle.getEnergy())
console.log(lion.getEnergy())
console.log(snake.getEnergy())

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();

console.log("\n")
console.log(snake.checkStatus())
console.log(eagle.checkStatus())
console.log(lion.checkStatus())
eagle.attack(lion)
lion.attack(snake)
snake.attack(eagle)
eagle.attack(snake)
lion.attack(eagle)
snake.attack(lion)
console.log(snake.checkStatus())
console.log(eagle.checkStatus())
console.log(lion.checkStatus())
snake.eat()
console.log(snake.checkStatus())
console.log(eagle.checkStatus())
console.log(lion.checkStatus())
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);
eagle.attack(lion)
lion.attack(eagle)
snake.eat()
console.log(snake.checkStatus())
console.log(eagle.checkStatus())
console.log(lion.checkStatus())
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);
eagle.attack(lion)
lion.eat()
snake.attack(lion)
lion.attack(eagle)
console.log(snake.checkStatus())
console.log(eagle.checkStatus())
console.log(lion.checkStatus())
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);




