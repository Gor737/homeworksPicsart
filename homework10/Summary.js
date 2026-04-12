                                                                        //-----SUMMARY-----
//----- 'this' binding ------
//task1
// function sum(a,b,c){
//     return (a + b + c);
// }
// const arr = [10, 20, 30];
// console.log(sum.apply(null, arr));          // -> 60



// //task2
// const student1 = { name: "Anna", score: 80 };
// const student2 = { name: "Mark", score: 95 };

// function printResult() {
//  console.log(this.name + " scored " + this.score);
// }

// printResult.call(student1);         // -> Anna scored 80
// printResult.apply(student2);        // -> Mark scored 95


// //task3
// const user = {
//   name: "Alex",
//   greet() {
//     return "Hello " + this.name;
//   }
// };

// const admin = {
//   name: "Admin"
// }

// console.log(user.greet.call(admin));        // -> Hello Admin


// //task4
// const numbers = [5, 12, 8, 20, 3];
// let maxVal = Math.max.apply(null, numbers);         // Variant_2(call) -> Math.max,call(null, ...numbers)
// console.log(maxVal);        // -> 20


// //task5
// const obj1 = {
//   value: 10,
//   getValue() {
//     return this.value;
//   }
// };

// const obj2 = {
//  value: 50
// };

// console.log(obj1.getValue.call(obj2));      // -> 50


// //task6
// function total(a, b, c) {
//     return a + b + c;
// }
// const args = [7, 8, 9];

// console.log(total.apply(null, args));


// //task7
// function show() {
//     return this.name;
// }
// const obj = { name: "Test" };
// const bound = show.bind(obj);

// console.log(bound.call({ name: "Wrong" }));     // -> Test, որովհետև bind անելուց հետո մշտապես կապվում է obj-ի հետ


// //tak8
// function foo(){
//     return `${this.name} has ${this.points} points`;
// }

// const p1 = { name: "Anna", points: 10 };
// const p2 = { name: "Mark", points: 25 };

// console.log(foo.call(p1));         // Variant_2 -> foo.apply(p1)
// console.log(foo.call(p2));          //Variant_2 -> foo.apply(p2)


// //task9
// function summ(a, b, c) {
//   return a + b + c;
// }

// function execute(fn, arr) {
//   return fn(...arr); 
// }

// console.log(execute(summ, [2,4,6]));


//task10
// function show() {
//  return this.name;
// }

// const a = { name: "A" };
// const b = { name: "B" };
// const fn = show.bind(a);

// console.log(fn.call(b));        // -> Կտպի A


// //task11
// const obj = {
//  value: 100,
//  get() {
//     const inner = () => this.value;
//     return inner();
//  }
// };

// console.log(obj.get());         // -> 100


//task12
// const obj = {
//   value: 1,
//   add(x) {
//     this.value += x;
//     return this;
//   }
// };

// obj.add(5).add(10);     //Սա աշխատեց, value-ի արժեքը փոխում է և վերադարձնում this, որը տվյալ օբյեկտն է
// console.log(obj);       // -> կտպի օբյեկտը, որտեղ value-ի արժեքը 16 է





//----- Setter and Getter ----- 
//task1
class Employee {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

let emp1 = new Employee("Gor", "Afyan");
console.log(emp1.fullName);


//task2
class Account {                          // <---- standart variant
    constructor(password){
        this._password = password;
    }
    set password(newPass){
        if(newPass.length < 6){
            console.log(`Password too short`);
            return null;
        } 
        this._password = newPass;
    }
}

let acc1 = new Account("Error404");
acc1.password = "ff";
console.log(acc1);


// class Account {                         // <---  with private property
//     #_password;
//     constructor(password){
//         this._password = password;
//     }
//     set _password(pass){
//         if(pass.length < 6){
//             console.log(`Password too short`);
//             return null;
//         } 
//         this.#_password = pass;
        
//     }
// }

// let acc1 = new Account("Error404");
// acc1._password = "ff";
// console.log(acc1);


//task3
class Temperature {
    constructor(celsius){
        this._celsius = celsius;
    }
    get celsius(){
        return (this._celsius * 1.8 + 32);      // -> to Farenheit;
    }
    set celsius(value){
        if(typeof value === 'number' && !Number.isNaN(value)){
            this._celsius = value;
        }
    }
}

const temp = new Temperature(77);
console.log(temp.celsius);


//task4
class Counter {
    constructor(){
        this._count = 0;
    }
    get count(){
        return this._count;
    }
    increment(){
        ++this._count;
    }
}

const c1 = new Counter();
c1.increment();
c1.increment();
c1.increment();
c1.increment();
console.log(c1.count);  // -> 4


//task5
class Product {
    constructor(price){
        this._price = price;
    }
    get price(){
        return (this._price - (this._price * 0.1));
    }
    set price(val){
        this._price = val;
    }
}

const prd1 = new Product(404);
console.log(prd1.price);       // -> price with 10% discount
prd1.price = 505;
console.log(prd1.price);        // -> changed price with 10% discount


//task6
class BankAccount {
    constructor(){
        this._balance = 0;
    }
    get balance(){
        return this._balance;   
    }
    set balance(money){
        if(money < 0){
            console.log("Your deposit can't be negative!!!");
            return;
        }
        this._balance += money;
    }
}

const b1 = new BankAccount();
console.log(b1.balance);        // --> balance by default 
b1.balance = 5000;
console.log(b1.balance);        // --> balance after deposit


//task7
class Rectangle{
    constructor(width, height){
        this._width = width;
        this._height = height;
    }
    get area(){
        return (this._width * this._height);
    }
    set width(newLen){
        if(newLen < 0) return;
        this._width = newLen;
    }
    set height(newLen){
        if(newLen < 0) return;
        this._height = newLen;
    }
}

const rec1 = new Rectangle(5,6);
console.log(rec1.area);
rec1.width = 7;
console.log(rec1.area);     


//task8
class Email {
    constructor(){
        this._email = null;
    }
    set email(mail){
        if(!mail.includes('@')){
            console.log("Invalid email");
            return;
        } 
        this._email = mail;
    }
    get email(){
        return this._email;
    }
}

const mail = new Email();
mail.email = "gorafyan723@gmail.com";
console.log(mail._email);
mail.email = "gor.gmail.com";       // -> print "invalid email" and email didn't change
console.log(mail._email);


//task9
class Cart{
    constructor(){
        this._total = 0;
    }
    get total(){
        return this._total;
    }
    set total(price){
        if(price >= 0)this._total += price;
    }
}

const cart1 = new Cart();
console.log(cart1.total);       // -> 0
cart1.total = 4000;
console.log(cart1.total);       // -> 4000


//task10
class Car{
    constructor(speed){
        this.speed = speed;
    }
    set speed(spd){
        if(spd > 200){
            console.log("Too fast");
            this._speed = 200;          // -> max speed
        } 
        else this._speed = spd;
    }
    get speed(){
        return this._speed;
    }
}

const car1 = new Car(250);
console.log(car1.speed);
car1.speed = 144;
console.log(car1.speed);




//------Map, Zip, Filter------
//task1
const arr1 = [1, 2, 3];
const doubledArr = arr1.map(el => el * 2);
console.log(doubledArr);


//task2
let arr2 = ["anna", "john"];
arr2 = arr2.map(el => el.toUpperCase());
console.log(arr2);


//task3
const arr3 = [{name: "A", age: 10}, {name: "B", age: 15}]; //→ [10, 15]
const ages = arr3.map(el => el.age);
console.log(ages);


//task4
function returnEvens(arr){
    return arr.filter(el => !(el % 2));
}

console.log(returnEvens([1,2,3,5,9,10,14]));

//task5
let users = [{name: "Ago", age: 16}, {name: "Chebet", age: 51}, {name: "Tito", age: 79}];
let olders = users.filter(user => user.age >= 18);
console.log(olders);


//task6
const words = ['ff', 'Gor', 'Afyan', 'federation', 'gmbrdilos'];
const word = words.filter(wrd => wrd.length > 5);
console.log(word);



//task7
const userss = [{name: "Ago", age: 16}, {name: "Chebet", age: 51}, {name: "Tito", age: 79}];
const olderNames = [];
userss.forEach(us =>{
    if(us.age >= 18) olderNames.push(us.name);
})
console.log(olderNames);


//task8
const nums = [1,2,5,6,8,10,4];
let filEvens = nums.filter(el => el % 2 === 0);
filEvens = filEvens.map(el => el * el);

console.log(filEvens);



//task9

const products = [
    {type: 'banana', price: 500},
    {type: 'xndzor', price: 1050},
    {type: 'Noor', price: 3700},
    {type: 'Tandz', price: 700}
];

const expensProd = products.filter(pr => pr.price > 1000);

console.log(expensProd);



//task10

const persons = [
 {name: "Anna", age: 17},
 {name: "John", age: 20},
 {name: "Gor", age: 23}
];

const adults = persons.filter(person => person.age >= 18);
adults.forEach(el => console.log(`${el.name} is ${el.age} years old`));