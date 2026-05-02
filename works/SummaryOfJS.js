                                        //-------task1-------
// --- YOUR CODE HERE ---
class Player {
    constructor(name, score){
        this.name = name;
        this.score = score;
        this.isOnline = true;
    }
}

const player = new Player("Alex", 1500);
const jsonStr = JSON.stringify(player)

// --- TEST CASES ---
console.log("Task 1.1:", typeof jsonStr === "string");
console.log("Task 1.2:", jsonStr.includes("Alex") && jsonStr.includes("1500"));



                                        //-------task2-------
const str = '{"title": "Epic Sword", "damage": 50}';

// --- YOUR CODE HERE ---
const obj = JSON.parse(str);

// --- TEST CASES ---
console.log("Task 2:", obj !== undefined && obj.damage === 50);



                                        //-------task3-------
const user = { username: "dev", stats: { level: 10 } };

// --- YOUR CODE HERE ---
const prettyJson = JSON.stringify(user, null, 4);

// --- TEST CASES ---
console.log("Task 3:", prettyJson.includes("\n    \"username\""));



                                        //-------task4-------
// --- YOUR CODE HERE ---
class Hero {
    constructor(){
        this.health = 100;
        this.mana = undefined;
    }
    attack(){

    }
}

const restoredHero = JSON.parse(JSON.stringify(new Hero()));
// --- TEST CASES ---
console.log("Task 4.1:", restoredHero.health === 100);
console.log("Task 4.2:", restoredHero.hasOwnProperty("mana") === false);
console.log("Task 4.3:", restoredHero.attack === undefined);




                                        //-------task5-------
const original = { items: ["apple", "potion"] };

// --- YOUR CODE HERE ---
const copy = JSON.parse(JSON.stringify(original));
copy.items.push("sword")

// --- TEST CASES ---
console.log("Task 5.1:", copy.items.length === 3);
console.log("Task 5.2:", original.items.length === 2);




                                        //-------task6-------
// --- YOUR CODE HERE ---
// const {month, year} = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();

// --- TEST CASES ---
console.log("Task 6.1:", typeof year === "number" && year >= 2024);
console.log("Task 6.2:", month >= 0 && month <= 11);




                                        //-------task7-------
// --- YOUR CODE HERE ---
const futureDate = new Date(2030,0,1);

// --- TEST CASES ---
console.log("Task 7.1:", futureDate.getFullYear() === 2030);
console.log("Task 7.2:", futureDate.getMonth() === 0);




                                        //-------task8-------
// --- YOUR CODE HERE ---
const time = Date.now(()=>{
    for(let i = 0; i < 1000000; ++i){}
})

const duration = Date.now() - time;

// --- TEST CASES ---
console.log("Task 8:", typeof duration === "number" && duration >= 0);




                                        //-------task9-------
// --- YOUR CODE HERE ---
const d = new Date();
d.setDate(d.getDate() + 5);

// --- TEST CASES ---
const expectedDiff = 5 * 24 * 60 * 60 * 1000;
const actualDiff = d.getTime() - new Date().getTime();
console.log("Task 9:", actualDiff >= expectedDiff - 1000); // 1 second tolerance allowed





                                        //-------task10-------
// --- YOUR CODE HERE ---
const dt = new Date();
const formatter = new Intl.DateTimeFormat("en-US",{
    dateStyle: "full",
    timeStyle: "long"
}) 
// .format(dt);
const formattedDate = formatter.format(dt)
console.log(formattedDate);

// --- TEST CASES ---
console.log("Task 10:", typeof formattedDate === "string" && formattedDate.length > 10);





                                        //-------task11-------
// --- YOUR CODE HERE ---
const buffer = new ArrayBuffer(16);

// --- TEST CASES ---
console.log("Task 11:", buffer.byteLength === 16);





                                        //-------task12-------
// --- YOUR CODE HERE ---
// const buff  = new ArrayBuffer(16);
// const int32View = new Int32Array(buff);
// int32View[0] = 42;

// // --- TEST CASES ---
// console.log("Task 12.1:", int32View[0] === 42);
// console.log("Task 12.2:", int32View.length === 4);



                                        //-------task13-------
const normalArray = [10, 20, 255];

// --- YOUR CODE HERE ---
const uint8View = new Uint8Array(normalArray);


// --- TEST CASES ---
console.log("Task 13.1:", uint8View instanceof Uint8Array);
console.log("Task 13.2:", uint8View[2] === 255);




                                        //-------task14-------
// --- YOUR CODE HERE ---
// const uint8View = new Uint8Array(1);
// uint8View[0] = 300;

// // --- TEST CASES ---
// console.log("Task 14:", uint8View[0] === 44); // 300 % 256





                                        //-------task15-------
// --- YOUR CODE HERE ---
// const myBuff = new ArrayBuffer(4);
// const uint8View = new Uint8Array(myBuff);
// const int32View = new Int32Array(myBuff);
// int32View[0] = 258;

// // --- TEST CASES ---
// console.log("Task 15.1:", uint8View[0] === 2);
// console.log("Task 15.2:", uint8View[1] === 1);




                                        //-------task16-------
const ids = [1, 2, 2, 3, 4, 1];

// --- YOUR CODE HERE ---
const uniqueIds = [...new Set(ids)];

// --- TEST CASES ---
console.log("Task 16.1:", uniqueIds.length === 4);
console.log("Task 16.2:", Array.isArray(uniqueIds));



                                        //-------task17-------
class Student {
  constructor(name) { this.name = name; }
}
const s1 = new Student("Alice");
const s2 = new Student("Bob");

// --- YOUR CODE HERE ---
const gradesMap = new Map();
gradesMap.set(s1, [90,95]);
gradesMap.set(s2, [80,85]);

// --- TEST CASES ---
console.log("Task 17.1:", gradesMap.get(s1)[0] === 90);
console.log("Task 17.2:", gradesMap.size === 2);




                                        //-------task18-------
const map = new Map([["x", 1], ["y", 2], ["z", 3]]);
let sum = 0;

// --- YOUR CODE HERE ---
for(const [key,value] of map){
    sum += value;
}

// --- TEST CASES ---
console.log("Task 18:", sum === 6);



                                        //-------task19-------
const secrets = new WeakMap();

// --- YOUR CODE HERE ---
class Playerr {
    constructor(token){
        secrets.set(this, token);
    }
    getSecret(){
        return secrets.get(this);
    }
}
const p1 = new Playerr("super_secret");

// --- TEST CASES ---
console.log("Task 19.1:", p1.getSecret() === "super_secret");
console.log("Task 19.2:", p1.token === undefined);




                                        //-------task20-------
const data1 = { id: 1 };
const data2 = { id: 2 };

// --- YOUR CODE HERE ---
const processedData = new WeakSet();
processedData.add(data1);
// processedData.add(data2);

// --- TEST CASES ---
console.log("Task 20.1:", processedData.has(data1) === true);
console.log("Task 20.2:", processedData.has(data2) === false);