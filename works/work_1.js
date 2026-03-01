        //task1
function isPrime(num){
    if(num === 2) return true;
    if(num <= 1 || isNaN(num) || num % 2  === 0) return false;

    for(let i = 3; i <= num/2; i += 2){
        if(!(num % i)) return false;
    }

    return true;
}

//console.log(isPrime(9))


        //task2
function isPolyndrom(str){
    let rev = str.split('');
    rev = rev.reverse().join('');

    if(rev === str) return true;
    else return false;
}

console.log(isPolyndrom("letel"));



        //task3
function factorial(n){
    if(n < 0) return "Invalid n";
    let fact = 1;

    for(let i = 1; i <= n; ++i){
        fact *= i
    }

    return fact;
}

console.log(`fact is ${factorial(5)}`);



        //task4
function maxInArray(arr){
    arr.sort()

    return arr[arr.length - 1];
}

console.log(maxInArray([1,5,0]));



        //task5
function sumDigits(num){
    let sum = 0;
    for(let i = num % 10; num; i = num % 10){
        sum += i;
        num = Math.floor(num/10);
    }
    return sum;
}

console.log(sumDigits(0));



        //task6
function reverseNumber(num){
    if(isNaN(num)) return "is NaN";

    let rev = 0;
    for(let i = num % 10; num; i = num % 10){
        rev *= 10;
        rev += i;
        num = Math.floor(num/10);
    }

    return rev;
}

console.log(reverseNumber(144));



        //task7
function countVowels(str){
    let count = 0;
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    for(let i = 0; i < str.length; ++i){
        for(let vow of vowel){
            if(vow === str[i]){
                count++;
            }   
        }
    }
    return count;
}

console.log(countVowels("aeioub"));



        //task8
function fibonacci(n){
    if(n < 0) return "Invalid n";

    let prevPrev = 0;
    let prev = 1;
    let cur = 1;

    for(let i = 3; i < n; ++i){
        cur = cur + prev;
        prev = cur - prev;
        prevPrev = cur - prev;
    }

    return cur;
}

console.log(fibonacci(7));



        //task9
function almostEqual(a,b){
    return ((b - a) < Number.EPSILON);
}

console.log(almostEqual(0.1 + 0.2, 0.3));



        //task10
function toNumberOrNull(value){
    let num = Number(value);
    if(isNaN(num)) return null;
    return num;
}

console.log(toNumberOrNull('76'));



        //task11
function exactType(value){
    if(value === null) return `type is ${null}`;
    else if(typeof(value) !== 'object') return `type is ${typeof(value)}`;
    else if(Object.prototype.toString.call(value) === '[object Array]') return `type is array`;
    else return `type is ${typeof(value)}`;
}

console.log(exactType(exactType));



        //task12
function toBoolean(value){
    return !!value;
}

console.log(toBoolean({}));



        //task13
function isPrimitive(value){
    if(value === null || typeof(value !== 'object')) return true;
    else return false;
}



        //task14
function isArrayy(value){
    if(Array.isArray(value)) return true;
    return false;
}

