const account = { username: "bob", _password: "supersecret123", balance: 100 };

// TODO: Create secureAccount

const secureAccount = new Proxy(account, {
    has(target,prop){
        if(prop[0] === '_'){
            return false;
        }
        else return Reflect.has(target, prop);
    },
    get(target, prop){
        if(prop[0] === '_'){
            return undefined;
        }else return Reflect.get(target, prop);
    },
    ownKeys(target){
        const keys = Reflect.ownKeys(target);
        const res = [];
        let tmp = true;

        for(let key of keys){
            if(key[0] === '_'){
                tmp = false;
            }else res.push(key);
        }

        if(tmp) return keys;
        return res;
    }
})

console.log(secureAccount._password);
console.log('_password' in secureAccount);
console.log(Object.keys(secureAccount));

// Expected output:
// undefined
// false
// ["username", "balance"]