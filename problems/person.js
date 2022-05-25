class Person {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hey, I'm ${this.name}!`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }

  switchVisit(otherPerson) {
    return `${otherPerson.name} visited ${this.name}`;
  }

  update(obj) {
    if (typeof obj !== "object") {
      throw new TypeError ("argument must be an object");
    }

    if ( obj.hasOwnProperty('name') && obj.hasOwnProperty('age') ) {
      this.name = obj.name;
      this.age = obj.age;
    } else {
      throw new TypeError("argument must have 'name' and 'age' properties");
    }
  }

  tryUpdate(obj) {

    try {
      this.update(obj);
      return true;
    } catch(error) {
      return false;
    }
  }

  static greetAll(arr) {
    let greetArr = [];

    arr.forEach(person => {
      greetArr.push(person.sayHello());
    });

    return greetArr;
  }



}

module.exports = Person;
