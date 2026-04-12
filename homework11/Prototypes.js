// //----task1----
// function Animal() {}
// function Dog() {}

// function myInstanceOf(obj, Constructor){
//     if(typeof obj !== 'object' || obj === null) return false;
//     let curr = obj.__proto__;
//     while(curr){
//         if(curr === Constructor.prototype) return true;
//         curr = curr.__proto__;
//     }
//     return false;
// }

//                                                                         //Recursion version 
// // function myInstanceOf(obj, Constructor){
// //     if(typeof obj !== 'object' || obj === null) return false;

// //     let tmp = obj.__proto__;
// //     if(tmp === null) return false;
// //     if(tmp === Constructor.prototype) return true;
    
// //     return myInstanceOf(tmp, Constructor);
// // }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// const dog = new Dog();

// console.log(myInstanceOf(dog, Dog)); // true
// console.log(myInstanceOf(dog, Animal)); // true
// console.log(myInstanceOf(dog, Array)); // false
// console.log(myInstanceOf(null, Object)); // false
// console.log(myInstanceOf(123, Number)); // false
// console.log(myInstanceOf("hello", String)); // false




// //----task2----
// function User(name) {
//  this.name = name;
// }

// function Car(model) {
//  this.model = model;
//  return { custom: "returned object" };
// }

// function myNew(Constructor, ...args){
//     const res = {};
//     res.__proto__ = Constructor.prototype;
//     const obj = Constructor.apply(res, args);
//     if(typeof obj === 'object' && obj !== null){
//         return obj;
//     }else return res;
// }

// const user = myNew(User, "Alex");
// console.log(user.name); // Alex
// console.log(Object.getPrototypeOf(user) === User.prototype); // true
// console.log(user.constructor === User); // true

// const car = myNew(Car, "BMW");
// console.log(car.custom); // returned object

// function Empty() {}

// const obj = myNew(Empty);
// console.log(Object.getPrototypeOf(obj) === Empty.prototype); // true

// function Test() {
//  return 123;
// }

// const test = myNew(Test);
// console.log(Object.getPrototypeOf(test) === Test.prototype); // true



//----task3----
// function checkProperty(obj, key){
//     for(let k of Object.keys(obj)){
//         if(k === key) return `own`;
//     }
    
//     let curr = obj.__proto__;
//     while(curr){
//         if(key in curr) return `inherited`;
//         curr = curr.__proto__;
//     }
//     return `not found`;
// }

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.name = "Rex";

// console.log(checkProperty(dog, "name")); // own
// console.log(checkProperty(dog, "eats")); // inherited
// console.log(checkProperty(dog, "age")); // not found
// //Additional edge cases:
// const obj = Object.create(null);
// obj.value = 10;

// console.log(checkProperty(obj, "value")); // own
// console.log(checkProperty(obj, "toString")); // not found
// console.log(checkProperty({}, "toString")); // inherited




//----task4----
// function getPrototypeMethods(obj){
//     const res = [];
//     let tmp = obj.__proto__;
//     if(!tmp || tmp === Object.prototype) return res;

//     for(let method of Object.getOwnPropertyNames(tmp)){
//         if(typeof tmp[method] === 'function' && method !== 'constructor') res.push(method);
//     }
    
//     return res;
// }

// function User(name) {
//  this.name = name;
// }

// User.prototype.sayHi = function () {
//  return `Hi, ${this.name}`;
// };

// User.prototype.getName = function () {
//  return this.name;
// };

// const user = new User("Alex");

// console.log(getPrototypeMethods(user)); // ["sayHi", "getName"] order may vary
// console.log(getPrototypeMethods({ a: 1 })); // []
// console.log(getPrototypeMethods([]).includes("push")); // true

// //Additional edge cases:
// const base = {
//  x: 10,
//  print() {
//    return "hello";
//  }
// };

// const obj = Object.create(base);

// console.log(getPrototypeMethods(obj)); // ["print"]
// console.log(getPrototypeMethods(Object.create(null))); // []




//----task5----
Array.prototype.mySum = function(){
    if(!this.length) return 0;
    let res = 0;
    this.forEach(el => {
        if(typeof el !== 'number' || Number.isNaN(el) || !Number.isFinite(el)){
            throw new Error("Invalid value");
        }
        res += el;
    })
    return res;
}

console.log([1, 2, 3].mySum()); // 6
console.log([10, -5, 4].mySum()); // 9
console.log([].mySum()); // 0

//Additional edge cases:
console.log([1, "2", 3].mySum()); // Error
console.log([1, NaN].mySum()); // Error
console.log([true, 2].mySum()); // Error

