                                                        //----- Part 1 —> setTimeout Basics ------
//------task1------
// setTimeout(() => console.log("Hello after 2 seconds"),2000);

//------task2------
function countDown(from, to){
    const fakeFrom = from;
    while(from >= to){
        const start = from;
        setTimeout(() => {
            console.log(start);
            if(start === 1) console.log("Go!");

        }, (fakeFrom - from) * 1000);
        --from;
    }
}

// countDown(5,1);

//------task3------
// const t = setTimeout(() => console.log("Executed"), 5000);
// setTimeout(() => clearTimeout(t), 2000);

//------task4------
function printInterval(num){
    console.log(num);
    setTimeout(() => bar(num + 1), 1000);
}

// printInterval(1);

                                                        //----- Part 2 — Event Loop / Macrotask Queue ------
//------task5------
// console.log("Start");

// setTimeout(() => {
//  console.log("Timeout");
// }, 0);

// console.log("End");

//console.log("Start")-ը ընկնելու է call stack և միանգամից տպի "Start",
//ապա setTimeout ընկնելու է microtask queue, հետո console.log("End")-ը մտնում է call stack և տպում է "End",
//որից հետո microtask queue-ից տեղափոխում է call stack կատարում և տպում "Timeout"

//------task6------
// setTimeout(() => console.log("A"), 1000);

// setTimeout(() => console.log("B"), 0);

// console.log("C");

//Կտպի "C", հետո "B", հետո "A"

//------task7------
// function delay(message, time){
//     setTimeout(() => console.log(message), time);
// }

// delay("Hello", 3000);

                                                    //----- Part 3 — Promises ------

//------task8------
// Promise.resolve(
//     setTimeout(() => console.log("Data loaded"), 2000)
// );

//------task9------
const promise = new Promise((res, rej) => {
    rej("Server Error");
})

promise.catch(er => console.log(er));

        //variant 2
// Promise.reject("Server Error")
//     .catch(
//         (er) => console.log(er)
//     )

//------task10------
function pay(balance, amount){

    return new Promise((resolve, reject) => {
        if(amount <= balance) resolve("Payment successful");
        else reject("Not enough money");
    })

}

pay(1000, 3000)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))

//------task11------
const user = {
  id: 1,
  name: "Alice"
};

const posts = [
  { id: 1, userId: 1, title: "Post 1" },
  { id: 2, userId: 1, title: "Post 2" }
];

const comments = [
  { id: 1, postId: 1, text: "Nice post!" },
  { id: 2, postId: 1, text: "Thanks for sharing" },
  { id: 3, postId: 2, text: "Great read!" }
];

function getUser(user) {
    return Promise.resolve(user);
}
function getPosts(user) {
    const post = posts.find((el => el.userId === user.id));
    return Promise.resolve(post);

}

function getComments(post) {
    const comment = comments.find(el => el.postId === post.id);
    console.log(comment);
}

getUser(user)
 .then(getPosts)
 .then(getComments)

                                                    //----- Part 4 — Microtask Queue vs Macrotask Queue ------

//------task12------
console.log("1");

setTimeout(() => {
 console.log("2");
}, 0);
Promise.resolve().then(() => {
 console.log("3");
});

console.log("4");

//Սկզբում console.log("1")-ը կնկնի call stack կկատարվի և կտպի,
//հետո setTimeout-ը կնկնի call stack և իր call back -ը կուղարկի Macrotask Queue,
//հետո Promise-ը կնկնի call stack և իր call back -ը կուղարկի Microtask Queue,
//հետո console.log("4")-ը կնկնի call stack կկատարվի և կտպի,
//հետո Microtask Queue-ից console.log("3") կանի,
//հետո Microtask Queue-ից console.log("2") կանի




//------task13------
console.log("A");

Promise.resolve().then(() => {
 console.log("B");
});

Promise.resolve().then(() => {
 console.log("C");
});

setTimeout(() => {
 console.log("D");
}, 0);

console.log("E");


//Կտպի՝  "A", "E", "B", "C", "D"




//------task14------
console.log("Start");

setTimeout(() => {
 console.log("Timeout 1");

 Promise.resolve().then(() => {
   console.log("Promise inside timeout");
 });
}, 0);

Promise.resolve().then(() => {
 console.log("Promise 1");
});

setTimeout(() => {
 console.log("Timeout 2");
}, 0);

console.log("End");

//Կտպի՝ "Start", "End", "Promise 1", "Timeout 1",  "Promise inside timeout", "Timeout 2"





                                                    //----- Part 5 — Practical Tasks ------

//------task15------

function delay(ms) {
    return new Promise(res => {
        setTimeout(res, ms);
    })
}

function trafficLight(){
    delay(3000)
    .then(() => console.log("red"))
    .then(() => delay(2000))
    .then(() => console.log("green"))
    .then(() => delay(1000))
    .then(() => console.log("yellow"))
    .then(() => trafficLight())
}

// trafficLight();



    //------task16------
// What is Call Stack  -->  հերթ է, կամ կարող ենք պատկերացնել զանգված, որտեղ ընկնում են սինխրոն ֆունկցիաները 
// What is Web API  --> գրադարան է կամ կարելի է ասել օբյեկտ է որի հետ աշխատում ենք մեզ տրված ֆունկցիաների մջոցով
// What is Macrotask Queue  --> (setTimeout, setInterval ...) հերթ է, որը ունի քիչ առաջնահերթություն
// What is Microtask Queue  --> (then, catch, finally ...)  հերթ է, որը ունի ավելի շատ առաջնահերթություն քան Macrotask, բայց ավելի քիչ քան սինխրոնները
// What is Event Loop   --> ցիկլ է, որը նայում է Call Stack-ը դատարկ է թե չէ, եթե դատարկ է հերթից ավելացնում է այնտեղ 




//-------Bonus Tasks------
function wait(ms){
    return new Promise(res => {
        setTimeout(res, ms);
    })
}

wait(2000).then(() => {
 console.log("Done");
});



//-------Hard Challenge------
console.log("1");

setTimeout(() => {
 console.log("2");

 Promise.resolve().then(() => {
   console.log("3");
 });

}, 0);

Promise.resolve().then(() => {
 console.log("4");
});

console.log("5");

setTimeout(() => {
 console.log("6");
}, 0);

//1, 5, 4, 2, 3, 6