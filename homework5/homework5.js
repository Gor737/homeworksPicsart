        //task1 (Curry)
function curry(cb) {

    return function nestCurry(...args){

        if(cb.length === args.length){
            return cb(...args);
        }
            return (...nArgs) => nestCurry(...args, ...nArgs);
        
    }
}

const sum = (a, b, c) => a + b + c;
const product = (a, b, c, d) => a * b * c * d;

const sumFunc = curry(sum);
const prodFunc = curry(product);

console.log(sumFunc(1)(2, 3)); //6
console.log(sumFunc(1, 2)(3)); //6
console.log(sumFunc(1, 2, 3));   //6
console.log(prodFunc(1, 2, 3, 4));   //24
console.log(prodFunc(1)(2, 3, 4));   //24
console.log(prodFunc(1, 2)(3, 4));   //24
console.log(prodFunc(1, 2, 3)(4));   //24

        //second variant _.curry(fun, [arity=fun.length])  <-- lodash _.curry() Method




        //task2 (Memoize)
function factorial(a) {
 let res = 1;
 for (let i = 2; i <= a; ++i) {
   res *= i;
 }
 return res;
}

function memoize(cb) {
    let memo = [];

    return function(n){
        let res = cb(n);
        memo[n] = res;
        return res;
    }
}

const foo = memoize(factorial);
console.log(foo(5)); // 120
console.log(foo(5)); // 120




        //task3 (Pipe)
function pipe(...funcs) {
    return function (n){
        let res = funcs[0](n);
        for(let i = 1; i < funcs.length; ++i){
            res = funcs[i](res);
        }
        return res;
    }
}


const add5 = a => a + 5;
const double = a => 2 * a;
const sub4 = a => a - 4;

const func = pipe(add5, add5, double, sub4); 
console.log(func(2)); //-> 20





        //task4 (Trace)
function trace(cb) {
    let history = [];
    return function wrapp(...args){
        let out = cb(...args);

        history.push({
            args: [args[0], args[1]],
            output: out
        });
        wrapp.history = history;

        return out;
    }
}

function fooo(a, b) {
 return a + b;
}

const tracedFunc = trace(fooo);
console.log(tracedFunc(1, 2)); //3
console.log(tracedFunc(2, 4, 6)); //6

console.log(tracedFunc.history); //[{args:[1,2], output: 3}, {args:[2,4], output:6}}]