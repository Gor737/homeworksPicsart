                                                //------Task1------
// Input
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Anna' },
  { id: 1, name: 'John' } // duplicate
];

function getUniqueUsers(users){
    const uniques = new Map();
    const res = [];
    for(const el of users){
        uniques.set(el.id, el);
    }
    for(const [key, value] of uniques){
        res.push(value);
    }
    return res;
}

// Expected Output
console.log(getUniqueUsers(users));
// [ { id: 1, name: 'John' }, { id: 2, name: 'Anna' } ]           



                                                //------Task2------
// Input
const myMap = new Map([['a', 1], ['b', 2]]);
// console.log(myMap);
// for(const el of myMap){
//     console.log(el);
// }

function mapToJson(map){
    const obj = {};
    for(const [key, value] of map){
        obj[key] = value;
    }
    return JSON.stringify(obj);
    //կամ կարող էինք մեկ տողով գրել՝  return JSON.stringify(Object.fromEntries(map));
}

function jsonToMap(json){
    const obj = JSON.parse(json);
    const map = new Map(Object.entries(obj));
    return map;
}

// Expected Output
const jsonStr = mapToJson(myMap);
console.log(jsonStr); 
// '{"a":1,"b":2}' OR '[["a",1],["b",2]]' (depends on implementation)

const restoredMap = jsonToMap(jsonStr);
console.log(restoredMap); 
// Map(2) { 'a' => 1, 'b' => 2 }



                                                //------Task3------
// Input
const students = [
  { name: 'John', group: 'A' },
  { name: 'Anna', group: 'B' },
  { name: 'Max', group: 'A' }
];

function groupByGroup(obj){
    const map = new Map();
    for(const student of obj){
        const [key, value] = [student.group, student.name];
        
        if(map.has(key)){
            map.set(key, [...map.get(key),value]);
        }else map.set(key, [value]);
    }
    return map;
}

// Expected Output
console.log(groupByGroup(students));
// Map(2) {
//   'A' => ['John', 'Max'],
//   'B' => ['Anna']
// }


                                                //------Task4------
// Input
let post1 = { title: 'JS is awesome' };
let post2 = { title: 'Node.js event loop' };
const weakMap = new WeakMap();

function addLike(post, user){
    if(weakMap.has(post)){
        const currUser = weakMap.get(post);
        weakMap.set(post, [...currUser, user]);
    }
    else weakMap.set(post, [user]);
}
function getLikes(post){
    return weakMap.get(post) ?? [];
}

addLike(post1, 'John');
addLike(post1, 'Anna');

// // Expected Output
console.log(getLikes(post1)); // ['John', 'Anna']
console.log(getLikes(post2)); // [] or undefined          




                                                //------Task5------
// Input
const text = "buy our new cheap product";
const badWords = ["cheap", "buy"];

function filterSpam(text, badWordsArray){
    const bad = new Set(badWordsArray);
    const txt = new Set(text.split(" "));

    let res = '';
    for(const el of txt){
        if(bad.has(el)) res += "***";
        else res += el;
        res += ' '
    }
    
    return res;
}

// Expected Output
console.log(filterSpam(text, badWords));
// "*** our new *** product"                                       





                                                //------Task6------

// Input
const setA = new Set(['reading', 'games', 'music']);
const setB = new Set(['games', 'sports']);

function intersection(set1, set2){
    const inter = new Set();

    for(const el of set1){
        if(set2.has(el)) inter.add(el);
    }

    return inter;
}


function difference(set1, set2){
    const diff = new Set();

    for(const el of set1){
        if(!set2.has(el)) diff.add(el);
    }

    return diff;
}

// Expected Output
console.log(intersection(setA, setB)); 
// Set(1) { 'games' }

console.log(difference(setA, setB)); 
// Set(2) { 'reading', 'music' }





                                                //------Task7------
// Input
const notif1 = { id: 1, text: 'Message 1' };
const notif2 = { id: 2, text: 'Message 2' };
const notifications = new WeakSet();

function processNotification(notif){
    
    if(notifications.has(notif)) return `Already processed, ignoring`;
    else notifications.add(notif);

    return `Processed: ${notif.text}`;
}

// Expected Output
console.log(processNotification(notif1)); // "Processed: Message 1"
console.log(processNotification(notif1)); // "Already processed, ignoring"
console.log(processNotification(notif2)); // "Processed: Message 2"





                                                //------Task8------
// Input
const dataObj = { value: 10 };
const cache = new WeakMap();

function heavyCalc(obj){
    if(!cache.has(obj)){
        console.log(`Script pauses for 1-2 seconds...`);
        for(let i = 0; i < 1000000000; ++i);

        let result = obj.value ** 2
        cache.set(obj, result);
        return result;
    }
    console.log(`Returns instantly`);
    return cache.get(obj);
}

// Expected Output
console.log(heavyCalc(dataObj)); 
// (Script pauses for 1-2 seconds...) -> 100

console.log(heavyCalc(dataObj)); 
// (Returns instantly) -> 100




                                                //------Task9------
// Input
const mixedMap = new Map([
  [1, 'num'],
  ['str', 'text'],
  [true, false]
]);

const itert = mixedMap.entries()
while(1){
    const step = itert.next();
    if(step.done) break;
    const [key, value] = step.value;
    if(typeof value === 'string') console.log([key, value]);
}


// Expected Output in console
// [1, 'num']
// ['str', 'text']                                          





                                                //------Task10------
// Input
const original = { a: 1, b: 2 };
const proxy = trackAccess(original);

const proxyMap = new WeakMap();

function trackAccess(obj){
    return new Proxy(obj, {
        get(target, prop){
            let count = proxyMap.get(target) ?? 0;
            proxyMap.set(target, ++count);

            return Reflect.get(target, prop);
        }
    })
}

function getStats(org){
    return proxyMap.get(org);
}

// Actions (reading properties via proxy):
console.log(proxy.a);
console.log(proxy.b);
console.log(proxy.a);

// Expected Output
console.log(getStats(original)); 
// 3