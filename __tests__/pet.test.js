const Pet = require('../src/pet');

describe('construtor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    }); 

    it('sets the name property', () => {
        const pet = new Pet('Fido');

        expect(pet.name).toEqual('Fido');
    });

    it('sets the starting age to 0', () => {
        const pet = new Pet('Fido');

        expect(pet.age).toEqual(0);
    });

    it('sets the starting fitness to 10', () => {
        const pet = new Pet('Fido');

        expect(pet.fitness).toEqual(10);
    });

    it('sets starting hunger to 0', () => {
        const pet = new Pet('Fido');
        
        expect(pet.hunger).toEqual(0);
    })
});
describe('growUp', () => {
    it('increments the age by 1', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.age).toEqual(1);
    });

    it('increments hunger by 5', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.hunger).toEqual(5);
    });

    it('decreases fitness by 3', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.fitness).toEqual(7);
    });
});

describe('walk', () => {
    it('increases fitness by 4', () => {
        const pet = new Pet('Fido');

        pet.fitness = 4;
        pet.walk();

        expect(pet.fitness).toEqual(8)
    });

    it('fitness reaches a maximum of 10', () => {
        const pet = new Pet('Fido');

        pet.fitness = 8;
        pet.walk();

        expect(pet.fitness).toEqual(10);
    });
});

describe('feed', () => {
    it('decreases hunger by 3', () => {
        const pet = new Pet('Fido');

        pet.hunger = 6;
        pet.feed();

        expect(pet.hunger).toEqual(3);
    });

    it('hunger reaches a minimum of 0', () => {
        const pet = new Pet('Fido');

        pet.hunger = 2;
        pet.feed();

        expect(pet.hunger).toEqual(0);
    });
});
    describe('checkup', () => {
        it('returns string if fitness is 3 or less', () => {
            const pet = new Pet('Fido');

            pet.fitness = 2;
            
            expect(pet.checkup()).toEqual('I need a walk');
        });

        it('returns string if hunger is 5 or more', () => {
            const pet = new Pet('Fido');

            pet.hunger = 6;

            expect(pet.checkup()).toEqual('I am hungry');
        });

        it('returns string if hungry and needs walk', () => {
            const pet = new Pet('Fido');

            pet.hunger = 10;
            pet.fitness = 1;

            expect(pet.checkup()).toEqual('I am hungry AND I need a walk')
        });

        it('returns string if dog is neither hungry or needs a walk', () => {
            const pet = new Pet('Fido');

            pet.hunger = 0;
            pet.fitness = 10;

            expect(pet.checkup()).toEqual('I feel great!')
        });
    });





