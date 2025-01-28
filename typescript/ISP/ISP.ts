
// ! Wrong Code ( This Code Violate OCP )

// interface Machine {
//     print(document: Document): void;
//     scan(document: Document): void;
//     fax(document: Document): void;
// }

// class MultiFunctionPrinter implements Machine {
//     print(document: Document): void {
//         console.log("The Machine is printing");
//     }
//     scan(document: Document): void {
//         console.log("The Machine is scaning");
//     } 
//     fax(document: Document): void {
//         console.log("The Machine is sending a fax");
//     }
// }

// class SimplePrinter implements Machine {
//     print(document: Document): void {
//         console.log("The Machine is printing");
//     }
//     scan(document: Document): void {
//         throw new Error("The Simple Printer Can't Scan");
//     } 
//     fax(document: Document): void {
//         throw new Error("The Simple Printer Can't Sending Fax");
//     }
// }



// * Correct Code

interface Printer {
    print(document: Document): void;
}

interface Scanner {
    scan(document: Document): void;
}

interface FaxMachine {
    fax(document: Document): void;
}

class MultiFunctionPrinter implements Printer, Scanner, FaxMachine {
    print(document: Document): void {
        console.log("The Machine is printing");
    }
    scan(document: Document): void {
        console.log("The Machine is scaning");
    } 
    fax(document: Document): void {
        console.log("The Machine is sending a fax");
    }
}

class SimplePrinter implements Printer {
    print(document: Document): void {
        console.log("The Machine is printing");
    }
}