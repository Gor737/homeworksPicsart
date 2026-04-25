//---------task1---------

counter = {
  start: 1,
  end: 3,
  [Symbol.iterator]() {
    let curr = this.start;
    return {
      next: () => {
        if (curr <= this.end) {
          return { value: curr++, done: false };
        } else return { done: true };
      },
    };
  },
};

for (const num of counter) {
  // [sy].next()
  console.log(num);
}
// Expected output:
// 1
// 2
// 3

//---------task2---------

function* fibonacci() {
  let a = 0;
  let b = 1;
  // [b, a]=[a + b, b];

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const [a, b, c, d] = fibonacci();
console.log(a, b, c, d);

// Expected output:
// 0 1 1 2
// (or 1 1 2 3 depending on where you start)

//---------task3---------

function* trafficLight() {
  const lights = ["🟢 Green", "🟡 Yellow", "🔴 Red"];
  let idx = 0;
  while (true) {
    if (idx > 2) idx %= 2;
    yield lights[idx++];
  }
}

//'🟢 Green' -> '🟡 Yellow' -> '🔴 Red' -> '🟢 Green'.

const light = trafficLight();
console.log(light.next().value);
console.log(light.next().value);
console.log(light.next().value);
console.log(light.next().value);

// Expected output:
// "🟢 Green"
// "🟡 Yellow"
// "🔴 Red"
// "🟢 Green"




//---------task4---------

function* generateId() {
    let id = 1;
    while(1) yield `id: ${id++}`;
}

let idGen = generateId();
console.log(idGen.next().value);
console.log(idGen.next().value);
console.log(idGen.next().value);

// Expected output:
// "id_1"
// "id_2"
// "id_3"
// Question: What will console.log([...generateId()]) output?




//---------task5---------

function* piggyBank(){
    let val = yield `Initialize the generator`;

    while(1) {
        val += yield val;
    }
}

const bank = piggyBank();
bank.next(); // Initialize the generator

console.log(bank.next(50).value);
console.log(bank.next(25).value);

// Expected output:
// 50
// 75




//---------task6---------

function* range(start, end){
    let myStart = start;
    while(myStart <= end){
        yield myStart++;
    }
}

const numbers = [...range(2, 5)];
console.log(numbers);

// Expected output:
// [2, 3, 4, 5]




//---------task7---------

function* filterEven(array){
    const evens = [];
    for(let i = 0; i < array.length; ++i){
        if(array[i] % 2 === 0) yield array[i];
    }
}

const data = [1, 2, 3, 4, 5, 6];
const result = [];

for (const num of filterEven(data)) {
  result.push(num);
  if (result.length === 2) break; // Stop after 2 matches
}

console.log(result);

// Expected output:
// [2, 4]




//---------task7---------

function* quoteCarousel(arr) {
    let idx = 0;
    while(1){
        if(idx >= arr.length) idx %= arr.length;
        yield arr[idx++];
    }
}

const quotes = ["Q1", "Q2", "Q3"];
const carousel = quoteCarousel(["Q1", "Q2", "Q3"]);

console.log(carousel.next().value);
console.log(carousel.next().value);
console.log(carousel.next().value);
console.log(carousel.next().value);

// Expected output:
// "Q1"
// "Q2"
// "Q3"
// "Q1"