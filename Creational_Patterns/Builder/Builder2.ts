interface ICustomer {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
}

interface ICustomerBuilder {
    setFirstName( first_name: string ): ICustomerBuilder;
    setLastName( last_name: string ): ICustomerBuilder;
    setEmail( email: string ): ICustomerBuilder;
    setPhoneNumber( phone_number: string ): ICustomerBuilder;
}

class Customer implements ICustomer {
    constructor(
        public first_name: string,
        public last_name: string,
        public email: string,
        public phone_number: string,
    ) {}
}