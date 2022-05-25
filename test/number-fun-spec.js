const { expect } = require("chai");
const { returnsThree, reciprocal } = require("../problems/number-fun");

describe ("returnsThree function", function() {

    it ("should return the number 3", () => {

        expect(returnsThree()).to.equal(3);

    });

});

describe ("reciprocal function", function() {
    context ("valid arguments", function() {

        it ("should return the reciprocal of a number", () =>{

            expect(reciprocal(9)).to.equal(1/9);
            expect(reciprocal(14)).to.equal(1/14);
            expect(reciprocal(500/250)).to.equal(250/500);

        });
    });

    context ("invalid arguments", function() {

        it ("should throw a TypeError if not passed a number between 1 and 1,000,000", () => {

            expect(() => {reciprocal(0.5)}).to.throw(TypeError);
            expect(() => {reciprocal(1000001)}).to.throw(TypeError);
            expect(() => {reciprocal("potato")}).to.throw(TypeError);
            expect(() => {reciprocal(-857000)}).to.throw(TypeError);
            expect(() => {reciprocal(5000000000000000000000)}).to.throw(TypeError);

        });
    });

});
