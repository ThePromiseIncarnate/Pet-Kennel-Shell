function createPet(inputName, inputSpecies) {
    const pet = {
        name: inputName,
        species: inputSpecies,
        happiness: 50,
        energy: 100,
        play: function() {
            this.energy -= 20
            this.happiness += 10;
            console.log(`You played with ${this.name}! Happiness is now ${this.happiness}, energy is now ${this.energy}.`)
        },
        feed: function() {
            this.happiness += 20;
            this.energy += 20;
            console.log(`You fed ${this.name}! Happiness is now ${this.happiness}, energy is now ${this.energy}.`)
        }, 
        status: function() {
            console.log(`Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}`)
        },
    }
    return pet
}

let petOne = createPet("Maeve", "Dog");
petOne.status();
petOne.play();
petOne.feed();
petOne.status();

let petTwo = createPet("Jules", "Cat");
petTwo.status();
petTwo.play();
petTwo.feed();
petTwo.status();

let petThree = createPet("Kiara", "Cat");
petThree.status();
petThree.play();
petThree.feed();
petThree.status();

let petFour = createPet("Jasmine", "Dog");
petFour.status();
petFour.play();
petFour.feed();
petFour.status();