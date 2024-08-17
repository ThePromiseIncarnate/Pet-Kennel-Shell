function createPet(inputName, inputSpecies) {
    const pet = {
        name: inputName,
        species: inputSpecies,
        happiness: 50,
        energy: 100,
        play: function () {
            this.energy -= 15
            this.happiness += 10;
            console.log(`You played with ${this.name}! Happiness is now ${this.happiness}, energy is now ${this.energy}.`)
        },
        feed: function () {
            this.happiness += 20;
            this.energy += 20;
            console.log(`You fed ${this.name}! Happiness is now ${this.happiness}, energy is now ${this.energy}.`)
        },
        status: function () {
            console.log(`Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}`)
        },
    }
    return pet
}

const dogKennel = [];
const catKennel = [];
const fishTank = [];

dogKennel.push(createPet("Jasmine", "Dog"));
dogKennel.push(createPet("Maeve", "Dog"));
dogKennel.push(createPet("Brittany", "Dog"));
dogKennel.push(createPet("Leia", "Dog"));
dogKennel.push(createPet("Khan", "Dog"));

catKennel.push(createPet("Kiara", "Cat"));
catKennel.push(createPet("Jules", "Cat"));
catKennel.push(createPet("Sonya", "Cat"));
catKennel.push(createPet("Dunkin", "Cat"));
catKennel.push(createPet("Mialey", "Cat"));

fishTank.push(createPet("Bruce", "Fish"));
fishTank.push(createPet("Nemo", "Fish"));
fishTank.push(createPet("Dory", "Fish"));
fishTank.push(createPet("Marlin", "Fish"));
fishTank.push(createPet("Starfy", "Fish"));

for (let i = 0; i < dogKennel.length; i++) {
    if (i == 0) {
        for (let n = 0; n < 5; n++) {
            dogKennel[0].play();
            dogKennel[0].status();
        }
    } else {
        dogKennel[i].play();
        dogKennel[i].status()
    }
    if (dogKennel[i].energy < 30) {
        dogKennel[i].status();
        dogKennel[i].feed();
        dogKennel[i].status();
    }
}

for (let i = 0; i < catKennel.length; i++) {
    if (i == 0) {
        for (let n = 0; n < 5; n++) {
            catKennel[0].play();
            catKennel[0].status();
        }
    } else {
        catKennel[i].play();
        catKennel[i].status()
    }
    if (catKennel[i].energy < 30) {
        catKennel[i].status();
        catKennel[i].feed();
        catKennel[i].status();
    }
}

for (let i = 0; i < fishTank.length; i++) {
    if (i == 0) {
        for (let n = 0; n < 5; n++) {
            fishTank[0].play();
            fishTank[0].status();
        }
    } else {
        fishTank[i].play();
        fishTank[i].status()
    }
    if (fishTank[i].energy < 30) {
        fishTank[i].status();
        fishTank[i].feed();
        fishTank[i].status();
    }
}