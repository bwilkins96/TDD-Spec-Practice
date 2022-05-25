const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const myMap = require('../problems/my-map');

describe ("myMap function", () => {
    let testArr;

    const addFive = (num) => {return num + 5}
    const double = num => num * 2;

    beforeEach(() => {
        testArr = [1, 2, 3, 4];
    });

    it ("should return an array with each position changed by the callback", () => {

        expect(myMap(testArr, addFive)).to.deep.equal([6, 7, 8, 9]);
        expect(myMap(testArr, double)).to.deep.equal([2, 4, 6, 8]);

    });

    it ("should return a new array", () => {
        let newTest = myMap(testArr, addFive);

        expect(testArr).to.deep.equal([1, 2, 3, 4]);
        expect(newTest).to.not.deep.equal(testArr);

    });

    it ("should not call the built-in Array.map function", () => {

        const mapSpy = chai.spy.on(Array.prototype, "map");
        myMap(testArr, double);
        expect(mapSpy).to.have.not.been.called();

    })

    it ("should invoke the passed-in callback on each element", () => {
        let count = 0;

        const spyFunc = chai.spy(function(num) {
            count++;
            return num * 2;
        });
        myMap(testArr, spyFunc);
        expect(spyFunc).to.have.been.called()
        expect(count).to.equal(testArr.length)

    });

});

//let t = chai.spy.on(Array, myMap, );

//console.log(t);
