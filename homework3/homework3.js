        //task1

function myForEach(arr, cb){
    for(let i = 0; i < arr.length; ++i){
        cb(arr[i], i, arr);
    }
}




let arr = [1,2,3,4];
myForEach(arr, (el,idx, arr) => console.log(el, idx, arr));

//arr.forEach(() => console.log(1));



        //task2

function myMap(arr, cb){
    const newArr = [];
    for(let i = 0; i < arr.length; ++i){
        newArr.push(cb(arr[i], i , arr));
    }
    return newArr;
}

const nArr = myMap(arr, (el) => el * 2 );
console.log(nArr);



        //task3
function myFilter(arr, cb){
    const newArr = [];
    for(let i = 0; i < arr.length; ++i){
        if(cb(arr[i], i, arr)){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

const fArr = myFilter(arr, (el) => el < 3);
console.log(fArr);



        //task4
function mySome(arr, cb){
    for(let i = 0; i < arr.length; ++i){
        if(cb(arr[i], i, arr)) return true;
    }
    return false;
}

console.log(mySome(arr, (el,idx) => el === 2 || idx === 3));



        //task5
function myEvery(arr, cb){
    for(let i = 0; i < arr.length; ++i){
        if(!cb(arr[i], i, arr)) return false;
    }
    return true;
}

console.log(myEvery(arr, (el) => el > 10));



        //task6
function myIndexOf(str, search){
    goLabel:for(let i = 0; i < str.length; ++i){
        for(let j = 0; j < search.length; ++j){
            if(search[j]  !== str[i + j]) continue goLabel;
        }
        return i;
    }
    return -1;
}

console.log(myIndexOf("hello world", "wld"));



        //BONUS TASK.  (Curry)
function sum(a, b, c) {
    let res = a + b + c;
    return res;
}

function curry(callBack){

    return function(a){ 
        return function(b){
            return function(c){
                return callBack(a,b,c);
            }
        }
    }

}


const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3));