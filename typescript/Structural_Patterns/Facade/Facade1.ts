class Grinder {
    grindBeans(): void {
        console.log("Grinding Beans . . .");
    }
}

class Boiler {
    boilWater(): void {
        console.log("Boiling Water . . .");
    }
}

class Brewer {
    brewCoffee(): void {
        console.log("Brewing Coffee . . .");
    }
}

class CoffeeMakerFacade {
    // ? here we have a good question 
    // ? Why do we pass concrete classes as dependencies to the facade class instead of instantiating them within it ?
    // ? the answer inside the README file.
    constructor(private grinder: Grinder, private boiler: Boiler, private brewer: Brewer) {}

    makeCoffee(): void {
        this.grinder.grindBeans();
        this.boiler.boilWater();
        this.brewer.brewCoffee();
        console.log("The Coffee is ready!");
        
    }
}

// * Client Code
const grinder = new Grinder();
const boiler = new Boiler();
const brewer = new Brewer();

const coffeeMaker = new CoffeeMakerFacade(grinder, boiler, brewer);
coffeeMaker.makeCoffee();