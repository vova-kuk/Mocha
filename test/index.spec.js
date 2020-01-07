const assert = require('assert');

const {sum, mult} = require('../index');

describe('function sum', () => {
    it('should variable sum equals 10', () => {
        assert.equal(sum(2, 3), 5);
    })

    it('should variable sum not equals 0', () => {
        assert.notEqual(sum(2, 4), 0);
    })
})


it('should mult works correct', () => {
    assert.equal(mult(3, 5), 15)
}); 