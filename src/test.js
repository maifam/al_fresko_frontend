
let person = {} 
person.name = 'John'
person.cards = 30 

person.collects = function (number) {
    console.log(`${this.name} collects cards`)
    this.cards += number
}



class Animal {
    constructor(dog) {
        this.dog = dog
    }
}

var animal2 = new Animal('Cat')


Input : function animals() {
    this.name = 'Sammy';
    this.age= '10';
    }

    function dog() {
    animals.call(this);
    }

    dog.prototype = Object.create(animals.prototype);
    const pup = new dog();
    console.log(pup.name);
    console.log(pup.age)

Output : "Sammy"
         "10"


Input : function fruits() {
    this.name = 'fruit 1';
    this.season = 'summer';
    }

    function apple() {
    fruits.call(this);
    }

    apple.prototype = Object.create(fruits.prototype);
    const app = new apple();
    console.log(app.name);
    console.log(app.season);

Output : "fruit 1"
     "summer"