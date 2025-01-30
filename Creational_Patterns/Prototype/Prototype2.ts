
abstract class Shape {
    constructor(public properties: ShapeProperties) {}
    abstract clone(): Shape;
}

interface ShapeProperties {
    color: string;
    x: number;
    y: number;
}

class Rectangle extends Shape {
    constructor(public properties: ShapeProperties, public width: number, public height: number) {
        super(properties);
    }

    clone(): Shape {
        return new Rectangle(this.properties, this.width, this.height);
    }
}

class Circle extends Shape {
    constructor(public properties: ShapeProperties, public radius: number) {
        super(properties);
    }

    clone(): Shape {
        return new Circle(this.properties, this.radius);
    }
}

let c1 = new Circle({color: "blue", x: 5, y: 6}, 4.5);
let c2 = c1.clone();

if (c1 === c2) {
    console.log("Both instances are the same");
} else {
    console.log("Instances are not the same");
}

console.log("Circle 1", c1);
console.log("Circle 2", c2);