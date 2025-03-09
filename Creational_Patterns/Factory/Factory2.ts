abstract class PaymentProcessor {
    constructor(public amount: number) {}

    abstract processPayment(): void;
}

class PaypalProcessor extends PaymentProcessor {
    public processPayment(): void {
        console.log(`Process Paypal, Amount: ${this.amount}`);
    }
}

class StripeProcessor extends PaymentProcessor {
    public processPayment(): void {
        console.log(`Process Stripe, Amount: ${this.amount}`);
    }
}

class BankTarnsferProcessor extends PaymentProcessor {
    public processPayment(): void {
        console.log(`Process Bank Tarnsfer, Amount: ${this.amount}`);
    }
}

class PaymentProcessorFactory {
    public createProcessor(
        type: "paypal" | "stripe" | "bank transfer",
        amount: number
    ): PaymentProcessor {
        switch (type) {
            case "paypal":
                return new PaypalProcessor(amount);

            case "stripe":
                return new StripeProcessor(amount);

            case "bank transfer":
                return new BankTarnsferProcessor(amount);
        
            default:
                throw new Error("Invalid processor type");
        }
    }
}

const paymentProcessorFactory = new PaymentProcessorFactory();

const paypal = paymentProcessorFactory.createProcessor("paypal", 500);
paypal.processPayment();