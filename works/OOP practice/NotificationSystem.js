                                                    //------OOP Practice------

class NotificationCenter{
    constructor(){
        this.subscribers = [];
    }
    subscribe(app){
        if(!this.subscribers.includes(app)){
            this.subscribers.push(app);
            return `${app.name} app subscribed`;
        }else return `${app.name} app is already subscribed`;
    }
    notifyAll(message){
        this.subscribers.forEach(el => el.reciveMessage(message));
    }
    unsubscribe(app){
        if(this.subscribers.includes(app)){
            this.subscribers = this.subscribers.filter(el => el !== app);
            return `${app.name} app unsubscribed`;
        }else return `${app.name} app is already subscribed`;
    }
}

class Application{
    constructor(){
        if(new.target === Application) throw new Error("Applcation is abstract class");
    }
    reciveMessage(){
        throw new Error("is abstract method");
    }
}

class Facebook extends Application{
    constructor(name){
        super();
        this.name = name;
    }
    reciveMessage(msg){
        console.log(`${this.name} recived message: "${msg}"`);
    }
}
class Instagram extends Application{
    constructor(name){
        super();
        this.name = name;
    }
    reciveMessage(msg){
        console.log(`${this.name} recived message: "${msg}"`);
    }
}
class Telegram extends Application{
    constructor(name){
        super();
        this.name = name;
    }
    reciveMessage(msg){
        console.log(`${this.name} recived message: "${msg}"`);
    }
}


const center = new NotificationCenter();

const facebook = new Facebook("Facebook");
const instagram = new Instagram("Instagram");
const telegram = new Telegram("Telegram");

console.log(center.subscribe(facebook));   // "App subscribed"
console.log(center.subscribe(instagram));  // "App subscribed"


center.notifyAll("New post added");
// Facebook and Instagram should receive the message

console.log(center.unsubscribe(instagram)); // "App unsubscribed"

center.notifyAll("Story updated");
// only Facebook should receive the message
