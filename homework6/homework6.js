        //Task1 -> Implemate Call
Function.prototype.myCall = function(thisObj, ...args){
    let myThis = thisObj ?? globalThis;
    let uniqueVal = Symbol();
    myThis[uniqueVal] = this;
    let res = myThis[uniqueVal](...args);
    delete myThis[uniqueVal];
    return res;
}

let obj = {
    name: "Gor",
    surname: "Afyan"
}

function foo(age){
    console.log(`${this.name} ${this.surname} is ${age} years old.`)
}

foo.myCall(obj, 23);
//console.log(obj)



        //Task2 -> Implemate Apply
Function.prototype.myApply = function(thisObj, argArr){
    let myThis = thisObj ?? globalThis;
    let unique = Symbol();
    myThis[unique] = this;
    let res = myThis[unique](...argArr);
    delete myThis[unique];
    return res;
}

foo.myApply(obj, [23]);




        //Task3 -> Implemate Bind
Function.prototype.myBind = function(thisObj){
    let newThis = {thisObj} ?? globalThis;
    let sym = Symbol();
    newThis[sym] = this;

    return function bindo(...args){
        newThis[sym](...args);
        return function(...newArgs){
            bindo(...newArgs);
        };
    }
}


let bindFoo = foo.myBind(obj);
bindFoo(23);
bindFoo(33);
bindFoo(44)
console.log(obj);       //original object is not chanched