class Animal{
    private _animalName;
    private _animalSound;

    constructor(name: string, sound: string){
        this._animalName = name;
        this._animalSound = sound;
    }

    get name() {
        return this._animalName;
    }

    get type() {
        return this._animalName;
    }

    get sound(){
        return this._animalSound;
    }
}

class Dog extends Animal{
    
}

class Cat extends Animal{
    
}

class Parrot extends Animal{
    
}

class Camel extends Animal{

}

class Zoo {
    private _animals : Array<Object> = new Array<Object>();

    public addAnimal(animal: object) {
        this._animals.push(animal);
    }

    get animals(): Array<Object> {
        return this._animals;
    }
}
let zoo = new Zoo;
zoo.addAnimal(new Cat("Cat", "Miauw"));
zoo.addAnimal(new Dog("Dog", "Woef"));
zoo.addAnimal(new Parrot("Parrot", "I am a pirate"));
zoo.addAnimal(new Camel("Camel", ""));

zoo.animals.forEach((animal) => {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.sound + "<br>");
});