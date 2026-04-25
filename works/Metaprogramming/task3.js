 class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
}

// TODO: Create productProxy for a new Product instance

const prod = new Product();

const productProxy = new Proxy(new Product(), {
    get(target, prop){
        return Reflect.get(target, prop);
    },
    set(target, prop, value){
        if(typeof value === 'number' && Number.isFinite(value)){
            console.log(`Expected output`);
            return Reflect.set(target, prop, value);
        }else throw new TypeError("Type shoud be a number");
    }
})

productProxy.price = 1200; 
console.log(productProxy.price);

// productProxy.price = -50; // Should throw TypeError
// productProxy.price = "Free"; // Should throw TypeError

// Expected output:
// 1200