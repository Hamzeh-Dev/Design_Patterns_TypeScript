abstract class Car {

    constructor(public model: string, public productionYear: number) {}

    abstract displayCarInfo(): void;
}

class Sedan extends Car {
    public displayCarInfo(): void {
        console.log(`This is a Sedan, Model: ${this.model}, Production Year: ${this.productionYear}`);
    }
}

class SUV extends Car {
    public displayCarInfo(): void {
        console.log(`This is a SUV, Model: ${this.model}, Production Year: ${this.productionYear}`);
    }
}

class Hatchback extends Car {
    public displayCarInfo(): void {
        console.log(`This is a Hatchback, Model: ${this.model}, Production Year: ${this.productionYear}`);
    }
}

class CarFactory {
    public createCar(
        type: "sedan" | "suv" | "hatchback",
        model: string,
        productionYear: number
    ): Car {
        switch (type) {
            case "sedan":
                return new Sedan(model, productionYear);

            case "suv":
                return new SUV(model, productionYear);


            case "hatchback":
                return new Hatchback(model, productionYear);

            default:
                throw new Error("Invalid car type");
        }
    }
}

const carFactory = new CarFactory();

const sedan = carFactory.createCar("sedan", "Camry", 2023);
sedan.displayCarInfo();

const suv = carFactory.createCar("suv", "RAV4", 2022);
suv.displayCarInfo();

const hatchback = carFactory.createCar("hatchback", "Corolla", 2025);
hatchback.displayCarInfo();