class DataStore {
  username = "admin";
}


const store = new DataStore();
// TODO: Create proxyStore

const proxyStore = new Proxy(store, {
    get(target, prop){
        console.log(`Reading property: ${target[prop]}`);
        return Reflect.get(target,prop);
    },
    set(target, prop, value){
        console.log(`Writing property: ${prop} = ${value}`);
        return Reflect.set(target, prop, value);
    }
})

console.log(proxyStore.username);
proxyStore.theme = "dark";

// Expected output:
// "Reading property: username"
// "admin"
// "Writing property: theme = dark"