class Coffee{
    getDescription(){
        return `Coffee`;
    }
    getCost(){
        return 500;
    }
}

class Milk{
    constructor(obj){
        this.drink = obj;
        this.type = "Milk"
    }
    getDescription(){
        return `${this.drink.getDescription()}, ${this.type}`;
    }
    getCost(){
        return this.drink.getCost() + 200;
    }
}

class Sugar{
    constructor(obj){
        this.drink = obj;
        this.type = "Sugar";
    }
    getDescription(){
        return `${this.drink.getDescription()}, ${this.type}`;
    }
    getCost(){
        return this.drink.getCost() + 100;
    }
}
class Caramel{
    constructor(obj){
        this.drink = obj;
        this.type = "Caramel";
    }
    getDescription(){
        return `${this.drink.getDescription()}, ${this.type}`;
    }
    getCost(){
        return this.drink.getCost() + 200;
    }
}
class Chocolate{
    constructor(obj){
        this.drink = obj;
        this.type = "Chocolate";
    }
    getDescription(){
        return `${this.drink.getDescription()}, ${this.type}`;
    }
    getCost(){
        return this.drink.getCost() + 200;
    }
}


const coffee = new Coffee();
console.log(coffee.getDescription()); // "Coffee"
console.log(coffee.getCost()); // 5

const coffeeWithMilk = new Milk(coffee);
console.log(coffeeWithMilk.getDescription()); // "Coffee, Milk"
console.log(coffeeWithMilk.getCost()); // 7

const coffeeWithMilkAndSugar = new Sugar(coffeeWithMilk);
console.log(coffeeWithMilkAndSugar.getDescription()); // "Coffee, Milk, Sugar"
console.log(coffeeWithMilkAndSugar.getCost()); // 8

const fullOrder = new Caramel(new Chocolate(coffeeWithMilkAndSugar));
console.log(fullOrder.getDescription()); // "Coffee, Milk, Sugar, Chocolate, Caramel"
console.log(fullOrder.getCost()); // 12