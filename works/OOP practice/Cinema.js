class CinemaFacade{
    constructor(...devices){
        this.devices = [...devices];
    }
    watchMovie(){
        this.devices.forEach(el => console.log(el.movieMode()));
        return `Movie mode activated`;
    }
    endMovie(){

        this.devices.forEach(el => console.log(el.endMov()));
        return `Movie mode deactivated`;
    }
}

class Devices {
    turnOn(name){
        return `${name} turned on`
    }
    turnOff(name){
        return `${name} turned off`
    }
}
class TV extends Devices{
    movieMode(){
        return this.turnOn('tv');
    }
    endMov(){
        return this.turnOff('tv');
    }
}
class SoundSystem extends Devices{
    movieMode(){
        return this.turnOn('sound system');
    }
    endMov(){
        return this.turnOff('sound system');
    }
}
class Lights{
    movieMode(){
        return `Lights dimmed`;
    }
    endMov(){
        return `Lights restored`;
    }
}




const tv = new TV();
const sound = new SoundSystem();
const lights = new Lights();

const cinema = new CinemaFacade(tv, sound, lights);

console.log(cinema.watchMovie());
// TV turned on
// Sound system turned on
// Lights dimmed
// "Movie mode activated"

console.log(cinema.endMovie());
// TV turned off
// Sound system turned off
// Lights restored
// "Movie mode deactivated"