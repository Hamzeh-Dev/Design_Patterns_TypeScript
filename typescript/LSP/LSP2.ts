
abstract class PaymentProcessor {
    abstract processpayment(amount: number): void;
}

class CreditCardProcessor extends PaymentProcessor {
    processpayment(amount: number): void {
        // Logic for Credit Card Payments
        console.log(`Processing Credit Card Payments - Amount $${amount}`);
    }
}

class DebitCardProcessor extends PaymentProcessor {
    processpayment(amount: number): void {
        // Logic for Debit Card Payments
        console.log(`Processing Debit Card Payments - Amount $${amount}`);
    }
}

class PaypalProcessor extends PaymentProcessor {
    processpayment(amount: number): void {
        // Logic for Paypal Payments
        console.log(`Processing Paypal Payments - Amount $${amount}`);
    }
}

function executePayments(paymentProcessor: PaymentProcessor, amount: number): void {
    paymentProcessor.processpayment(amount);
}

let creditCardProcessor = new CreditCardProcessor();
let debitCardProcessor = new DebitCardProcessor();
let paypalProcessor = new PaypalProcessor();

executePayments(creditCardProcessor, 500);
executePayments(debitCardProcessor, 700);
executePayments(paypalProcessor, 550);