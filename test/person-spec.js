const { expect } = require('chai');
const chai = require('chai');
const extract = chai.extract;
const Person = require('../problems/person');

describe ("Person class", function() {

    let friend;
    let friend2;

    beforeEach( () => {
        friend = new Person("Hannah", 24);
        friend2 = new Person("Ben", 25);
    })


    context("constructor", function() {

        it ("should accept a 'name' and 'age' and set them as variables of an instance", () => {

            expect(friend.name).to.equal("Hannah");
            expect(friend.age).to.equal(24);

        });

    });

    context("sayHello()", () => {

        it ("should return a string of the Person's name and a greeting", () => {
            expect(friend.sayHello()).to.equal("Hey, I'm Hannah!");
        })

    });

    context("visit(otherPerson", () => {
        it ("should return a string stating that person visited the other person", () => {
            expect(friend.visit(friend2)).to.equal("Hannah visited Ben");
        });
    });

    context("switchVisit(otherPerson", () => {
        it ("should return a string stating that the other person vistited the person", () => {
            expect(friend.switchVisit(friend2)).to.equal("Ben visited Hannah");
        });
    });

    context("update(obj)", () => {
        it("should throw a TypeError if the incoming argument is not an object", () => {
            expect(() => {friend.update(14)}).to.throw(TypeError);
        });

        it("should throw a TypeError if the incoming object does not have a 'name' and 'age' property", () => {
            let testObj = {};
            expect(() => {friend.update(testObj)}).to.throw(TypeError);
        });

        it("should update the object to have the new passed-in values", () => {
            let coolPerson = new Person("mai", 32);
            coolPerson.update({ name: "lulu", age: 57 })

            expect(coolPerson.name).to.equal("lulu");
            expect(coolPerson.age).to.equal(57);
        });
    });

    context ("tryUpdate(obj)", () => {

        it ("should call update(obj) and return true if the update was successful", () => {
            let coolPerson = new Person("mai", 32);
            let updated = coolPerson.tryUpdate({ name: "lulu", age: 57 });

            expect(updated).to.equal(true);
            expect(coolPerson.name).to.equal("lulu");
            expect(coolPerson.age).to.equal(57);
        });

        it ("should call update(obj) and return false, but not throw an error, if it is not possible to update", () => {
            let coolPerson = new Person("mai", 32);
            let updated = coolPerson.tryUpdate({});

            expect(updated).to.equal(false);
        });
    });

    context ("static greetAll(arr)", () => {

        it ("should accept an array of Person instances and return a new array with the results of calling sayHello on each person instance", () => {

            expect(Person.greetAll([friend, friend2])).to.deep.equal(["Hey, I'm Hannah!", "Hey, I'm Ben!"])

        });


    });


});
