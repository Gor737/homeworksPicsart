class Service {
  name = "AuthService";
  getName() {
    return this.name;
  }
}

const service = new Service();
// TODO: Create boundService Proxy
const boundService = new Proxy(service, {
    _ourThis : this,
    get(target, prop){
        const res = Reflect.get(target, prop);
        if(typeof res === 'function'){
            console.log("Expected output");
            return res.bind(target);
        }
        return res;
    }
});


const detachedMethod = boundService.getName;
console.log(detachedMethod()); 

// Expected output:
// "AuthService"