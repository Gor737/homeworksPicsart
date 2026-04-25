                                        //--------MINI PROJECT — Payment System--------
class IPaymentMethod {
    constructor(){
        if(new.target === IPaymentMethod) throw new Error("Interface class");
    }
    pay(amount) {
        throw new Error("Is abstract method");
    }
}                

class CreditCardPayment extends IPaymentMethod {
    pay(amount){
        return `pay ${amount} from Credit Card`;
    }
}

class PayPalPayment extends IPaymentMethod {
    pay(amount){
        return `pay ${amount} from Paypal`;
    }
}

class CryptoPayment extends IPaymentMethod {
    pay(amount){
        return `pay ${amount} from Crypto`;
    }
}


class PaymentService {
    constructor(dependency){
        this.dependency = dependency;
    }
    payment(amount){
       return this.dependency.pay(amount);
    }
}


let cash = new CreditCardPayment();
let serv = new PaymentService(cash);
console.log(serv.payment(200));

