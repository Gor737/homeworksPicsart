// TODO: Implement withDefaults(target, defaultValue)
function withDefaults(target, defaultValue){
    return new Proxy(target, {
        get(target, prop){
            const res = Reflect.has(target, prop);
            if(res) return Reflect.get(target, prop);
            else return defaultValue;
        },
        set(target, prop, value){
            const res = Reflect.set(target, prop, value);
            if(res) return res;
            else return defaultValue;
        }
    })
}

const user = withDefaults({ name: "Alice" }, "Not provided");

console.log(user.name);
console.log(user.age);

// Expected output:
// "Alice"
// "Not provided"