    //task1
function getLength(str){
    return str.length;
}

    //task2
function changeToUpper(str){
    return str.toUpperCase();
}

    //task3
function getSum(num1, num2){
    return num1 + num2;
}

    //task4
function reverseStr(str){
    let rev = "";
    let lastChar = str.length - 1;

    for(let i = lastChar; i >= 0; --i){
        rev += str[i];
    }

   str = rev;
   return str;
}

//console.log(reverseStr("hello"));



    //task5
function isContains(str1, str2){
    if(str1.includes(str2)){
        return true;
    }
    return false;
}

//console.log(isContains("aaLearning JavaScript", "Java"))



    //task6
let list = [3, 6, 9, 12];
let getIndex = function(arr){
    return arr.indexOf(9);
}
//or`
let getIndexx = function(arr, target){
    for(let i = 0; i < arr.length; ++i){
        if(target === arr[i]){
            return i;
        }
    }
    return -1;
}

// console.log(getIndex(list));
// console.log(getIndexx(list, 9));



    //task7
function getSum(arr){
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    return sum;
}

//console.log(getSum([1,2,5,7]));



    //task8
function isContains(str1, str2){
    if(str1.includes(str2)){
        return true;
    }
    return false;
}


    //task9
function getSumOfAray(arr){
    let sum = 0;
    let i = 0;
    while(i < arr.length){
        sum += arr[i];
        ++i;
    }
    return sum;
}


console.log(getSumOfAray([1,2,5,7]));



    //task10
function oddOrEven(num){
    num % 2 ? console.log("is Odd") : console.log("is Even");
}

oddOrEven(3568);



    //task11
function getType(value){
    if(typeof(value) !== 'object') console.log(`is ${typeof(value)}`);
    else console.log(`is ${Object.prototype.toString.call(value)}`);
}

getType({null:1});



    //task12
function isTruthy(value){
    let res = (!value) ? true : false;
    return res;
}

console.log(isTruthy(null));


    //task13
    
function equals(subj1,subj2){
    let obj = {
        loose: null,
        strict: null
    }
    obj.loose = (subj1 == subj2);
    obj.strict = (subj1 === subj2);

    return obj;
}

console.log(equals(2,'2'));



    //task14
function isNumber(num){
    if(!Number.isNaN(num) && typeof(num) === 'number'){
        return true;
    }else return false; 
}

console.log(isNumber('dwq'));



    //task15
function contToNumber(value){
    let integer = Number(value);
    if(isNaN(integer)) return null;
    else return integer;
}

console.log(contToNumber('6/h'));




    //task16
function toBool(value){
    return Boolean(value);
}

console.log(toBool(null));



    //task17
function isSimpleObj(value){
    let type = Object.prototype.toString.call(value);

    if(type === '[object Object]') return true;
    else if(type === '[object Array]' || value === null || type === '[object Function]') return false;
}

console.log(isSimpleObj(toBool));



    //task18
function isPrimitive(value){
    if(value === null || typeof(value) !== 'object') return true;
    else return false;
}

console.log(`!   ${isPrimitive({})}`)



    //task19
function getSumIfIsNumbers(num1, num2){
    if(!Number.isNaN(num1) && !Number.isNaN(num2)){
        if(typeof(num1) === 'number' && typeof(num2) === 'number'){
            return num1 + num2;
        }
    }
    return `Invalid Input!`;
}

console.log(getSumIfIsNumbers(2,'j'));