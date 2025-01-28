
class Product {
    constructor(private id: string, private price: number, private description: string){}

    display(): void {
        console.log(`ID: ${this.id}, Price: ${this.price}, Description: ${this.description}`);
        
    }
}

class Book extends Product {
    constructor(id: string, price: number, description: string, private title: string, private author: string){
        super(id, price, description);
    }

    display(): void {
        super.display();
        console.log(`Title: ${this.title}, Author: ${this.author}`);
    }
}

class Electronic extends Product {
    constructor(id: string, price: number, description: string, private branch: string, private model: string){
        super(id, price, description);
    }

    display(): void {
        super.display();
        console.log(`Branch: ${this.branch}, Model: ${this.model}`);
    }
}

let book: Product = new Book("1", 19.99, "A good book", "A Book", "Someone");
book.display();

let laptop: Product = new Electronic("2", 1199, "A good laptop", "Dell", "XPS15");
laptop.display();