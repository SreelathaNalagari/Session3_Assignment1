
/**
 * The Greeter class is base class with greet method 
	* @class Greeter
	* @constructor
**/

// This class has three members: a property called name, a constructor, and a method greet.
class Greeter {
    name:string;
    constructor(name){
        this.name = name;
    }
    greet()
    {
        console.log(`Hello! Make a nice day ${greet.name}`);
    }
}

let greet = new Greeter("Latha");
greet.greet();