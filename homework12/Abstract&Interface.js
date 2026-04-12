                                                //-----Abstract & interface Classes
//--------Task1---------
class Shape{
    constructor(){
        if(new.target === Shape) throw new Error("Abstract class");
    }
    getArea(){
        throw new Error("Area method is abstract, so it not implamented");
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    getArea(){
        return (Math.PI * (this.radius ** 2));
    }
}

class Rectangle extends Shape{
    constructor( width, height){
        super();
        this.width = width;
        this.height = height;
    }
    getArea(){
        return (this.width * this.height);
    }
}

const shape = new Shape();      // -> Error: Cannot instantiate abstract class

const rect = new Rectangle(10, 5);
console.log(rect.getArea());    // -> 50



//--------Task2---------
class StorageProvider{
    constructor(){
        if(new.target === StorageProvider) throw new Error("StorageProvider is Interface class!");
    }
    upload(file){
        throw new Error("upload is abstract method!");
    }
    download(filename){
        throw new Error("download is abstract method!");
    }
}

class LocalStorageProvider extends StorageProvider{
    upload(file){
        return `${file} upload`;
    }
    download(filename){
        return `${filename} download`;
    }
}

class CloudStorageProvider extends StorageProvider{
    upload(file){
        return `${file} upload`;
    }
    download(filename){
        return `${filename} download`;
    }
}

function useStorage(provider){
    if(typeof provider.upload === 'function' && typeof provider.download === 'function'){
        console.log("Works");
        return;
    }
    throw new Error("Invalid storage provider");
}

useStorage(new LocalStorageProvider());         // -> Works 

useStorage({});       // -> Error: Invalid storage provider




//--------Task3---------
class Animal {
    speak(){
        console.log(`Animal makes a sound`);
    }
}

class Dog extends Animal{
    speak(){
        super.speak();
        console.log(`Dog barks`);
    }
}

const d = new Dog();
d.speak();
