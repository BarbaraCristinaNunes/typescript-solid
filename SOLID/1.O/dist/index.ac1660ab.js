class Animal {
    constructor(name, sound){
        this._animalName = name;
        this._animalSound = sound;
    }
    get name() {
        return this._animalName;
    }
    get type() {
        return this._animalName;
    }
    get sound() {
        return this._animalSound;
    }
}
class Dog extends Animal {
}
class Cat extends Animal {
}
class Parrot extends Animal {
}
class Camel extends Animal {
}
class Zoo {
    addAnimal(animal1) {
        this._animals.push(animal1);
    }
    get animals() {
        return this._animals;
    }
    constructor(){
        this._animals = new Array();
    }
}
let zoo = new Zoo;
zoo.addAnimal(new Cat("Cat", "Miauw"));
zoo.addAnimal(new Dog("Dog", "Woef"));
zoo.addAnimal(new Parrot("Parrot", "I am a pirate"));
zoo.addAnimal(new Camel("Camel", ""));
zoo.animals.forEach((animal)=>{
    document.querySelector('#target').innerHTML += animal.type + ": " + animal.sound + "<br>";
});

//# sourceMappingURL=index.ac1660ab.js.map
