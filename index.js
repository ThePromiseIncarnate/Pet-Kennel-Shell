const pet = {
    name: "Sonya",
    species: "Cat",
    happiness: 50,
    play: function() {
        this.happiness += 10;
        console.log(`You played with ${this.name}! Happiness is now ${this.happiness}.`)
    },
    feed: function() {
        this.happiness += 20;
        console.log(`You fed ${this.name}! Happiness is now ${this.happiness}.`)
    }, 
    status: function() {
        console.log(`Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}`)
    },
}

pet.status();
pet.play();
pet.feed();
pet.status();