
interface Shape {
    area(): number;
    perimerter(): number;
}

class Circle implements Shape {
    constructor(private radius: number) {}

    area(): number {
        return Math.PI * this.radius * this.radius;
    }

    perimerter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    area(): number {
        return this.width * this.height;
    }

    perimerter(): number {
        return 2* (this.width + this.height);
    }
}

const calcTotalArea = (shape: Shape): number => {
    return shape.area();
}

let cir: Circle = new Circle(5);
let rec: Rectangle = new Rectangle(5, 3);

console.log(cir.area());
console.log(calcTotalArea(cir));