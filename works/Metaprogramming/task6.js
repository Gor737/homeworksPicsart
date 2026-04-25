const arr = [10, 20, 30, 40];

// TODO: Create pythonArray
const pythonArray = new Proxy(arr, {
    get(target, prop){
        if(prop < 0){
            const idx = target.length - (-prop);
            return Reflect.get(target, idx);
        }else return Reflect.get(target, prop);
    },
    set(target, prop, value){
        if(prop < 0){
            const idx = target.length - (-prop);
            return Reflect.set(target, idx, value);
        }else return Reflect.set(target, idx, value);
    }
})

console.log(pythonArray[0]);
console.log(pythonArray[-1]);
console.log(pythonArray[-2]);

// Expected output:
// 10
// 40
// 30