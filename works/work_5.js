                                                //-------------task1-------------               with function

// function Animal(name, age){
//     this.name = name;
//     this.age = age;

// }
// Animal.prototype.eat = function(){
//     return `${this.name} is eat`;
// }
// Animal.prototype.sleep = function(){
//     return `${this.name} is sleep`;
// }
// Animal.prototype.getInfo = function(){
//     return `${this.name} is ${this.age} years old`;
// }
// Animal.foo = function(){  "foo is called";}


// function Dog(name, age, breed){

//     Animal.call(this,name, age);

//     // let a = new Animal(name,age);
//     // this.name = a.name;
//     // this.age = a.age;

//     this.breed = breed;
// }
// Dog.prototype.makeSound = function(){
//     return `Woof!`;
// }
// Dog.prototype.getInfo = function(){
//     return `${this.name} ${this.breed} is ${this.age} years old`;
// }

// Dog.prototype.__proto__ = Animal.prototype;
// Dog.__proto__ = Animal;


// let anml1 = new Animal("Some animal", 2);
// let dog1 = new Dog("Rex",3,"Pudel");

// console.log(dog1.sleep());

// console.log(Dog.foo());


                                                                    // with classes
// class Animal{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eat`;
//     }
//     sleep(){
//         return `${this.name} is sleep`;
//     }
//     getInfo(){
//         return `${this.name} is ${this.age} years old`;
//     }
// }  




// class Dog {
//     constructor(name,age,breed){
//         this.name = name;
//         this.age = age;
//         this.breed = breed;
//     }
//     makeSound(){
//         return `Woof!`;
//     }
//     getInfo(){
//         return `${this.name} ${this.breed} is ${this.age} years old`;
//     }
// }

// Object.setPrototypeOf(Dog.prototype, Animal.prototype);
// Dog.__proto__ = Animal;

// let anml1 = new Animal("Some animal", 2);
// let dog1 = new Dog("Rex",3,"Pudel");

// console.log(dog1.sleep());




                                                                //---------task2----------
class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eat`;
    }
    sleep(){
        return `${this.name} is sleep`;
    }
}

class Dog{
    constructor(name,age,breed){
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    makeSound(){
        return `Woof!`;
    }
}

class Puppy{
    constructor(name, age, breed){
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    play(){
            return `${this.name} is played`;
    }
}


Object.setPrototypeOf(Dog.prototype, Animal.prototype);
Object.setPrototypeOf(Dog, Animal);
Object.setPrototypeOf(Puppy.prototype, Animal.prototype);
Object.setPrototypeOf(Puppy, Animal);

let anml1 = new Animal("Some animal", 2);
let dog1 = new Dog("Rex",3, "Pudel");
let ppy = new Puppy("Tuzo", 1, "Shpric");

console.log(dog1.makeSound());
console.log(ppy.eat());

Object.setPrototypeOf(Puppy.prototype, Dog.prototype);
Object.setPrototypeOf(Puppy, Dog);
// Puppy.__proto__ = Dog;

console.log(dog1.eat());
console.log(ppy.eat());

console.log(Puppy.prototype, Puppy.__proto__);




                                                                //---------task3---------
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        return `${this.name} is ${this.age} years old!`;
    }
}


class Student{
    constructor(name, age, university){
        this.name = name;
        this.age = age;
        this.university = university;
    }
    study(){
        return `${this,name} study in ${this.university} university!`;
    }
}

Object.setPrototypeOf(Student.prototype, Person.prototype);
Object.setPrototypeOf(Student, Person);

console.log(Student.prototype, Student.__proto__);
