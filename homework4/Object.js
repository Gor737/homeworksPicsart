                                                    //Homework.  10/03
                                    
        //task1
let person1 = {
    name : "Gor",
    age : 23,
    country : "Armenia"
};

let person2 = {
    name : "Samo",
    age : 21,
    work : "structure"
};

let mergedPerson = Object.assign(person1, person2);         //-> mergedPerson = person1 != person2
console.log(mergedPerson);


        //task2
let student ={
    name: "Marta",
    age: 99,
    subject: "Physics"
};

Object.freeze(student);
console.log(student);
student.age = 77;
student.name = "fff";
console.log(student);       //-> Չի փոխվում property-ի արժեքը



        //task3
let test = {};

test.name = test.name ?? "Chlp";                //nullish operator
if(!test.val) test.val = 23;                    // if statement
test.cond = (test.cond || 0 || "dj");           // OR operator
test.bool = test.val < 20 ? true : false;       //ternary operator

console.log(test);



        //task4
let obj = {};
let arr = ["city", "town", "village", "street"];

for(let el of arr){
    obj[el] = "betaTest"; 
}

console.log(obj);



        //task5
let object = {
    1 : 10,
    2 : 20,
    3 : 30,
    4 : 44
}

for(let val of Object.keys(object)){
    console.log(object[val]);
}



        //task6
let base = {
    days : 444,
    months : 30,
    years : 7,
    price : "44 million"
};

let toArr = Object.entries(base).filter((el) => typeof el[1] === 'number');         //filter to only numbers value

let filteredObj = {};
for(let [key, value] of toArr){
    filteredObj[key] = value;
}

console.log(filteredObj);



        //task7
function isEqual(obj1, obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    for(let key in obj1){
        if(typeof obj1[key] !== 'object' || obj1[key] === null){
            if(obj1[key] !== obj2[key]) return false;
        }else if(!isEqual(obj1[key], obj2[key])) return false;

    }

    return true;
}


let test1 = {
    a:1,
    b:{
        d:3
    },
    c:2
};

let test2 = {
    a:1,
    b:{
        d:3
    },
    c:2
};

console.log(isEqual(test1, test2));
