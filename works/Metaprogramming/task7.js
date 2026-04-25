// TODO: Implement makeImmutable(obj)
function makeImmutable(obj){
    return new Proxy(obj, {
        set(target, prop, value){
            throw new Error("Cannot change property");
        },
        defineProperty(target,prop){
            throw new Error("Cannot delete property");
        },
        setPrototypeOf(target, vObj){
            throw new Error("Cannot set prototype");
        }
    })
}

const constantData = makeImmutable({ version: "1.0.0" });

// constantData.version = "1.0.1"; // Should throw Error
// delete constantData.version; // Should throw Error

console.log(constantData.version);

// Expected output:
// "1.0.0"