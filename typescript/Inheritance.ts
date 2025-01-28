
class Animal {
    constructor(private name: string) {}

    move(distance: number): void {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

class Dog extends Animal {
    constructor(name: string = "dog"){
        super(name);
    }
}

let dog: Dog = new Dog("Max");
dog.move(5);