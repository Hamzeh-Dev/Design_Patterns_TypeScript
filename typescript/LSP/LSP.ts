
abstract class  Shape {
    abstract calcArea(): number;
}

class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
        super();
    }

    calcArea(): number {
        return this.width * this.height;
    }
}

class Square extends Shape {
    constructor(public side: number) {
        super();
    }

    calcArea(): number {
        return this.side * this.side;
    }
}


function area(shape: Shape) {
    return shape.calcArea();
}

let rectangle: Shape = new Rectangle(10, 12);
let square: Shape = new Square(8);

console.log(area(rectangle)); // 120
console.log(area(square)); // 64
