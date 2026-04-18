                            //-----------The Iteration Protocol (Symbol.iterator)-----------
const myRange = {
    from: 33,
    to: 37,
    [Symbol.iterator](){
        let current = this.from;

        return {
            next: () => {
                if(current <= this.to){
                    return {value: current++, done: false}
                }else return {done: true};
            }
        }
    }
}                             

let init = myRange[Symbol.iterator]();
// console.log(init.next());


for(let el of myRange){
    console.log(el);
}

console.log([...myRange]);
// console.log(myRange);


//------Experiment (reverse order)------

myRange[Symbol.iterator] = function(){
    let current = this.to;
    return {
        next: () => {
            if(this.from <= current){
                return {value: current--, done: false}
            }else return {done: true}
        }
    }
}

let initRev = myRange[Symbol.iterator]();
// console.log(initRev.next());


for(let el of myRange){
    console.log(el);
}

console.log([...myRange]);
// console.log(myRange);




                            //----------Controlling Concatenation (Symbol.isConcatSpreadable)----------
const digits = [1, 2, 3];
const extraNumbers = {
    0 : 4,
    1 : 5,
    2 : 6,
    3 : 7,
    // length : 2,
    [Symbol.isConcatSpreadable] : true
}

console.log(digits.concat(extraNumbers));

// extraNumbers[Symbol.isConcatSpreadable] = false;
// console.log(digits.concat(extraNumbers));


//------Experiment------

const bonus = [4, 5];
bonus[Symbol.isConcatSpreadable] = false;

const res = digits.concat(bonus);
console.log(res);
//bonus-ը զանգված է, որը default ունի Symbol.isConcatSpreadable հատկություն,
//որը պահում է բուլյան արժեք և concat անելուց Array.prototype.concat()-ը
//փորձում է գտնել Symbol.isConcatSpreadable հատկությունը և եթե այդ հատկությունը true է, length-ից օգտվելով
//concat է անում, իսկ եթե false է, ավելացնում է 1 տարր՝
//(այդ օբյեկտը իր հատկություններով. Օր.՝ [1,2,3,[Symbol.isConcatSpreadable] = false])




                                    //-----------Custom Instance Validation (Symbol.hasInstance)-----------
class OddValidator{
    static [Symbol.hasInstance](instance){
        if(typeof instance === 'number' && !Number.isNaN(instance) && Number.isFinite(instance) && instance % 2 !== 0){
            return true;
        }else return false;
    }
}

let obj = new OddValidator()
console.log(obj instanceof OddValidator);
console.log(7 instanceof OddValidator);





                                    //-------------Task 4: Object Conversion (Symbol.toPrimitive)--------------
const account = {
    balance : 1000,
    currency : "AMD",
    [Symbol.toPrimitive](hint){
        switch(hint){
            case 'number':
                return this.balance;
            case 'string':
                return `Account balance: ${this.balance} ${this.currency}`;
            case 'default':
                return this.balance;
        }
    }
}


console.log(+account);          //սարքում է number
console.log(String(account));      //սարքում է string
console.log(account + 700);         //սա էլ default-ի տարբերակն է 
//օպերացիայից կախված որոշում ենք թե ինչ է hint-ը