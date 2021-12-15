// class Oven {
//     private _isOn : boolean;

//     public lightGas() : void
//     {
//         setTimeout(function (){
//             document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS ON!</p>";
//         }, 1000);
//         console.log("THE GAS IS ON!"); //insert fart humor here
//         this._isOn = true;
//     }

//     public extinguishGas() : void
//     {
//         setTimeout(function (){
//             document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS OFF!</p><hr>";
//         }, 3000);
//         console.log("THE GAS IS OFF!"); //insert fart humor here
//         this._isOn = false;
//     }

//     public bake(item : string)
//     {
//         if(this._isOn) {
//             setTimeout(function (){
//                 document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
//             }, 2000);
//             console.log("Now baking " + item + "!");
//         }
//         else
//         {
//             setTimeout(function (){
//                 document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no gas!</p>";
//             }, 2000);
//             console.log("there is no gas!");//insert fart humor here
//         }
//     }
// }

interface CookMethod{
    on(): void;
    off(): void;
    bake(item : string): void;
}

class Oven implements CookMethod{
    private _isOn : boolean;

    public on() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //insert fart humor here
        this._isOn = true;
    }

    public off() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    }

    public bake(item : string)
    {
        if(this._isOn) {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else
        {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!");//insert fart humor here
        }
    }
}

class Stove implements CookMethod{
    private _isOn : boolean;

    public on() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE ELETRICITY IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //insert fart humor here
        this._isOn = true;
    }

    public off() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE ELETRICITY IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    }

    public bake(item : string)
    {
        if(this._isOn) {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else
        {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no electricity!</p>";
            }, 2000);
            console.log("there is no gas!");//insert fart humor here
        }
    }
}
class Restaurant {
    private _name : string;
    private _cookMethod : CookMethod;

    constructor(name : string, cookMethod: CookMethod) {
        this._name = name;
        this._cookMethod = cookMethod;
    }

    public Cook(item : string) {
        this._cookMethod.on();
        this._cookMethod.bake(item);
        this._cookMethod.off();
    }
}


// let bakery1 = new Restaurant("Bakery", new Oven());
// bakery1.Cook("cookies");

//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...

// let bakery2 = new Restaurant("Bakery", new Stove());
// bakery2.Cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.Cook("crepes");




