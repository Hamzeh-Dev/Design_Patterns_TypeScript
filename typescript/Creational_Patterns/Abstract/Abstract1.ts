interface IProductA {
    operationA(): string;
}

interface IProductB {
    operationB(): string;
    combinedOperation(collaborator: IProductA): string;
}

interface IFactory {
    createProductA(): IProductA;
    createProductB(): IProductB;
}

class ProductA implements IProductA {
    operationA(): string {
        return "This is the result of operation A";
    }
}

class ProductB implements IProductB {
    operationB(): string {
        return "This is the result of operation B";
    }
    combinedOperation(collaborator: IProductA): string {
        const result = collaborator.operationA();
        return `The result of Product B Collabrating with (${result})`;
    }
}

class Factory implements IFactory {
    createProductA(): IProductA {
        return new ProductA();
    }
    createProductB(): IProductB {
        return new ProductB;
    }
}

const factory = new Factory();

const productA = factory.createProductA();
console.log(productA.operationA());

const productB = factory.createProductB();
console.log(productB.combinedOperation(productA));
console.log(productB.operationB());

