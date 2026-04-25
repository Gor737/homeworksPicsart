function slowTask(iterations) {
  let count = 0;
  for (let i = 0; i < iterations; i++) count++;
  return count;
}

// TODO: Implement profile(fn)
function profile(fn){
    return new Proxy(fn, {
        apply(target, thisArg, args){
            console.log(`Excecution time: ${performance.now()} ms`)
            return Reflect.apply(target, thisArg, args);
        }
    })
}

const profiledTask = profile(slowTask);
console.log(profiledTask(10000000));

// Expected output:
// "Execution time: X.XXXX ms"
// 10000000