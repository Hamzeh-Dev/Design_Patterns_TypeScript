
// Wrong Code
// class Discount {
//     giveDiscount(customerType: "premium" | "regular"): number {
//         if (customerType == "regular") {
//             return 10;
//         } else if (customerType == "premium") {
//             return 20;
//         } else {
//             return 5;
//         }
//     }
// }



// Correct Code
interface Customer {
    giveDiscount(): number;
}

class RegularCustomer implements Customer {
    giveDiscount(): number {
        return 10;
    }
}

class PremiumCustomer implements Customer {
    giveDiscount(): number {
        return 20;
    }
}

class Discount {
    giveDiscount(customer: Customer): number {
        return customer.giveDiscount();
    }
}

let premiumCustomer: Customer = new PremiumCustomer();
let discount: Discount = new Discount();

console.log(discount.giveDiscount(premiumCustomer));