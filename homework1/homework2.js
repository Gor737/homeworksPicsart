        //task1
function isEven(n){
    if(Number.isNaN(n) || typeof(n) !== 'number'){
        return `your value is not a number`;
    }
    if(n % 2) return false;            //odd
    else return true;                  //even
}

console.log(`Is Even?  --> ${isEven(0)}`);



        //task2
function sumUpTo(n){
    let sum = 0;
    for(let i = 1; i <= n; ++i){
        sum += i;
    }
    return sum;
}

console.log(`SumUpTo  -->  ${sumUpTo(5)}`);



        //task3
function minInArray(arr){                       //variant 1
    arr.sort((a,b) => a-b);
    return arr[0];
}

function minInArrayy(arr){                      //variant2
    let min = arr[0];
    for(let i = 1; i < arr.length; ++i){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

console.log(`Min number is. ${minInArray([1,0,9,40,-4])}`);
//console.log(`Min number is. ${minInArrayy([7])}`);



        //task4
function countDigits(n){
    if(!n) return 1;        //if n = 0
    
    let count = 0;
    n = Math.abs(n);
    
    while(n){
      count++;
      n = Math.floor(n/10);  
    }
    return count;
}

console.log(`Count of digits is.  ${countDigits(-213234)}`);



        //task5
function sumArray(arr){
    if(arr.length === 0) return `[#404] Array is empty !`

    let sum = 0;
    for(let el of arr){
        sum += el;
    }
    return sum;
}

console.log(`Sum of array elements is.  ${sumArray([])}`);



        //task6
function average(arr){
    let sum = 0;
    for(let el of arr){
        sum += el;
    }

    if(sum === 0) return 0;
    else return (sum / (arr.length));
}

console.log(`Average is.  ${average([5])}`);



        //task7
function countChar(str, char){
    let count = 0;
    for(let i = 0; i < str.length; ++i){
        if(char === str[i]) ++count;
    }
    return count;
}

console.log(`Count of characters in string is.  ${countChar('abc', 'd')}`);



        //task8
function removeFirstChar(str){
    if(!str) return str;

    let res = "";
    for(let i = 1; i < str.length; ++i){
        res += str[i];
    }
    return res;
}

console.log(`Resultly string is.  ${removeFirstChar("Hello")}`);



        //task9
function power(base, exp){                              //variant1
    if(!exp) return 1;      // if exp = 0

    let pow = 1;
    for(let i = 0; i < exp; ++i){
        pow *= base;
    }
    return pow;
}

function powerr(base, exp){                             //variant2
    return Math.pow(base, exp);
}


console.log(`Power is.  ${power(-1, 3)}`);
console.log(`Power is.  ${powerr(9, 0)}`);



        //task10
function contains(arr, value){
    for(let el of arr){
        if(el === value) return true;
    }
    return false;
}

console.log(`Is contains?   ${contains([], 2)}`);



        //task11
function repeatString(str, n){
    if(!n) return "";
    
    let res = ""
    for(let i = 0; i < n; ++i){
        res += str;
    }
    return res;
}

console.log(`Repeated string is.  ${repeatString('I', 3)}`);



        //task12
function  firstAndLast(arr){
    if(!arr.length || arr.length === 2) return arr;
    if(arr.length === 1) return [arr[0], arr[0]];
    
    return [arr[0], arr[arr.length - 1]];
}

console.log(`Resultly array is.  ${firstAndLast([1])}`);






