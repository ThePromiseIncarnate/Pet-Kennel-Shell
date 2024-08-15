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
let petTwo = createPet("Jules", "Cat");
let petThree = createPet("Kiara", "Cat");
let petFour = createPet("Jasmine", "Dog");
let petFive = createPet("Free Willy", "Squirrel")
let petSix = createPet("Little Bit", "Squrrel")

const kennel = [petSix];

kennel.push(petOne);
kennel.push(petTwo);
kennel.push(petThree);
kennel.push(petFour);
kennel.push(petFive);

console.log(kennel)