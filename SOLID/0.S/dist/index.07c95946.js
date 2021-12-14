class Car {
    constructor(MAXIMUM_FUEL_CAPACITY){
        this._musicPlayer = new MusicPlayer();
        this._engine = new Engine(MAXIMUM_FUEL_CAPACITY);
    }
    get musicPlayer() {
        return this._musicPlayer;
    }
    get engine() {
        return this._engine;
    }
}
class MusicPlayer {
    get musicLevel() {
        return this._musicLevel;
    }
    set musicLevel(value) {
        this._musicLevel = value;
        this._oldMusicLevel = value;
    }
    turnMusicOn() {
        this._musicLevel = this._oldMusicLevel;
    }
    turnMusicOff() {
        this._musicLevel = 0;
    }
    constructor(){
        this._musicLevel = 0;
        this._oldMusicLevel = 50;
    }
}
class Engine {
    constructor(MAXIMUM_FUEL_CAPACITY1){
        this._engineStatus = false;
        this._fuel = 0;
        this._miles = 0;
        this.FUEL_MILEAGE = 10;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY1;
    }
    get miles() {
        return this._miles;
    }
    get fuel() {
        return this._fuel;
    }
    addFuel(fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }
    get engineStatus() {
        return this._engineStatus;
    }
    turnEngineOn() {
        this._engineStatus = true;
    }
    turnEngineOff() {
        this._engineStatus = false;
    }
    drive() {
        if (this.engineStatus === false || this._fuel <= 0) //what I am doing here is a good principle called "failing early"
        // If you have some conditions you need to check, that will exclude most of the code in your function check that first
        // This prevents your "happy path" of code to be deeply indented.
        return;
        this._fuel -= 1;
        this._miles += this.FUEL_MILEAGE;
    }
}
// When you see <cast>variable this is a "cast" of a variable, explicitly telling the code what the type of this variable will be.
// This is sometimes needed when a default JS function does not return a precise enough Type.
// I need to cast this to HtmlElement because the default Element return type is not specific to the HTML context (because some versions of JS can also be used in the backend, see node.js)
// This makes it not having some properties like .innerText. Test it out yourself by removing the <HTMLElement>
const musicToggleElement = document.querySelector('#music-toggle');
const musicSliderElement = document.querySelector('#music-slider');
const engineToggleElement = document.querySelector('#engine-toggle');
const addFuelForm = document.querySelector('#add-fuel-form');
const addFuelInput = document.querySelector('#add-fuel-input');
const fuelLevelElement = document.querySelector('#fuel-level');
const milesElement = document.querySelector('#miles-value');
const audioElement = document.querySelector('#car-music');
let car = new Car(100);
musicToggleElement.addEventListener('click', ()=>{
    if (car.musicPlayer.musicLevel === 0) {
        car.musicPlayer.turnMusicOn();
        musicSliderElement.value = car.musicPlayer.musicLevel.toString();
        musicToggleElement.innerText = 'Turn music off';
        return;
    }
    musicToggleElement.innerText = 'Turn music on';
    car.musicPlayer.turnMusicOff();
});
//I use input instead of change, because then the value changes when I move the mouse, not only on release
musicSliderElement.addEventListener('input', (event)=>{
    let target = event.target;
    car.musicPlayer.musicLevel = target.value;
    audioElement.volume = car.musicPlayer.musicLevel / 100;
    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = car.musicPlayer.musicLevel ? 'Turn music off' : 'Turn music on';
});
engineToggleElement.addEventListener('click', ()=>{
    if (car.engine.engineStatus) {
        car.engine.turnEngineOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    car.engine.turnEngineOn();
});
addFuelForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    car.engine.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = car.engine.fuel.toString();
});
setInterval(()=>{
    car.engine.drive();
    //while it looks like both lines below are the same there is a subtle difference (you could put breakpoints here to see the difference):
    // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number
    milesElement.innerText = car.engine.miles;
    // This .toString() will actually convert the value in JavaScript from an integer to a string
    fuelLevelElement.innerText = car.engine.fuel.toString();
    if (car.musicPlayer.musicLevel === 0) audioElement.pause();
    else audioElement.play();
}, 1000);

//# sourceMappingURL=index.07c95946.js.map