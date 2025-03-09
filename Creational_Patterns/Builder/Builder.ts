
interface Builder {
    setPartA(): void;
    setPartB(): void;
    setPartC(): void;
}

class Product {
    private _parts: string[] = [];

    public add( part: string ): void {
        this._parts.push(part);
    }

    public listParts(): void {
        console.log(`Product Parst: ${this._parts.join(", ")}`);
    }
}

class ConcreteBuilder implements Builder  {

    private product!: Product;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Product();
    }

    setPartA(): void {
        this.product.add("PartA");
    }

    setPartB(): void {
        this.product.add("PartB");
    }

    setPartC(): void {
        this.product.add("PartC");
    }

    public getProduct(): Product {
        const result = this.product;
        this.reset();
        return result;
    }
}

class Director {
    private builder!: Builder;

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public buildMinimumProduct(): void {
        this.builder.setPartA();
    }

    public buildFullProduct(): void {
        this.builder.setPartA();
        this.builder.setPartB();
        this.builder.setPartC();
    }
}

const builder = new ConcreteBuilder();
const director = new Director();

director.setBuilder(builder);

director.buildMinimumProduct();
let minProduct = builder.getProduct();
console.log(minProduct); // ['PartA']

director.buildFullProduct();
let fullProduct = builder.getProduct();
console.log(fullProduct); // ['PartA', 'PartB', 'PartC']
