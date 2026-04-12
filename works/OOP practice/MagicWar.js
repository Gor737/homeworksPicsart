class CharacterFactory{
    createCharacter(type, name){
        switch(type){
            case 'warrior':
                return new Warrior(name);
            case 'mage':
                return new Mage(name);
            case 'archer':
                return new Archer(name);
        }
    }
}

class Character{
    constructor(name){
        if(new.target === Character) throw new Error("Character is abstract class");
        this.name = name;
    }
    getInfo(){
        return(`
            name: ${this.name}
            health: ${this.health}
            attack: ${this._attack}
        `);
    }
    attack(){
        return `${this.name} attacks`
    }
}

class Warrior extends Character{
    constructor(name){
        super(name);
        this.health = 1000;
        this._attack = 400;
    }
} 
class Mage extends Character{
    constructor(name){
        super(name);
        this.health = 300;
        this._attack = 900;
    }
}
class Archer extends Character{
    constructor(name){
        super(name);
        this.health = 500;
        this._attack = 700;
    }
}





const factory = new CharacterFactory();

const warrior = factory.createCharacter("warrior", "Thor");
const mage = factory.createCharacter("mage", "Merlin");
const archer = factory.createCharacter("archer", "Legolas");

console.log(warrior.getInfo()); // "Warrior: Thor, HP: 150"
console.log(mage.getInfo()); // "Mage: Merlin, HP: 100"
console.log(archer.getInfo()); // "Archer: Legolas, HP: 120"

console.log(warrior.attack()); // "Thor attacks with a sword"
console.log(mage.attack()); // "Merlin casts a spell"
console.log(archer.attack()); // "Legolas shoots an arrow"