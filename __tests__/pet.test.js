const Pet = require('../src/pet');

describe('construtor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    }); 
});