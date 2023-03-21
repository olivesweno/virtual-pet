ageStart = 0;

function Pet(name) {
    this.name = name;
    this.age = ageStart
    this.growUp = function() {
        this.age += 1;
    };
}

module.exports = Pet;