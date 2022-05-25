const {expect} = require('chai');
const reverseString = require('../problems/reverse-string')

describe ("reverseString Function", function() {

    it("should return a reversed string", function() {
        let funReversed = reverseString("fun");

        expect(funReversed).to.equal("nuf");
    })

    it("should throw an error when not passed a string", function() {

        expect(() => {reverseString(13)}).to.throw(TypeError);

    });

});
