        //task1
function myIsNaN(value){
    if(value !== value) return true;
    return false;
}

console.log(myIsNaN('7'));


        //task2
function myIsFinite(value){
    if(value !== Infinity && value !== -Infinity && typeof(value) === 'number' && value === value){
        return true;
    }else return false;
}

console.log(myIsFinite('7'));


        //task3
function myIsInteger(value){
    if(typeof(value) === 'number' && value % 1 === 0){
        return true;
    }else return false;
}

console.log(myIsInteger());


        //task4
function myIsSafeInteger(value){
    let x = Number.MAX_SAFE_INTEGER;
    if(typeof(value) === 'number' && Math.abs(value) <= x && value % 1 === 0){
            return true;
    }else return false;
}

console.log(myIsSafeInteger(10) + '  !!!');


        //task5
function myStartsWith(str, search){
    for(let i = 0; i < search.length; ++i){
        if(str[i] !== search[i]) return false;
    }
    return true;
}

console.log(myStartsWith('JavaScript', 'Java'));


        //task6
function myEndsWith(str, search){
    for(let i = 0; i < search.length; ++i){
        if(str[str.length - 1 - i] !== search[search.length - 1 - i]) return false;
    }
    return true;
}


console.log(myEndsWith('JavaScript', 'ip'));


        //task7
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



        //task8
function mySlice(str, start, end){
    let res = '';
    while(start < end){
        res += str[start];
        start++;
    }
    return res;
}

console.log(mySlice("javascript", 0, 4));



        //task9
function myRepeat(str, count){
    let res = '';
    while(count){
        res += str;
        count--;
    }
    return res;
}

console.log(myRepeat('ha', 3));

