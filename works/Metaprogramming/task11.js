// TODO: Implement createQueryBuilder()
function createQueryBuilder(){
    const steps = [];

    const proxy = new Proxy([], {
        get(target, prop){

            if(prop === 'execute'){
                return function (){
                    return "Query steps: " + JSON.stringify(steps);
                }
            }
            return function(...args){
                steps.push({method: prop, args: args});
                return proxy;
            }

        }
    })

    return proxy;
}

const queryBuilder = createQueryBuilder();
const query = queryBuilder.select('id', 'name').where('age', 18).limit(10).execute();

console.log(query);

// Expected output:
// "Query steps: [{"method":"select","args":["id","name"]},{"method":"where","args":["age",18]},{"method":"limit","args":[10]}]"