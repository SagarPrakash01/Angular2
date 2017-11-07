export class Customer {
    CustomerType: string = "";
    CustomerId: string = "";
    CustomerName: string = "";
    CustomerAmount: number = 0;
    //validate customer - all three fields are compulsory
    IsValid(): boolean {
        if (this.CustomerId.length == 0) {
            return false;
        }
        if (this.CustomerName.length == 0) {
            return false;
        }
        if (this.CustomerAmount <= 0) {
            return false;
        }
        return true;   
    }
}

export class LoyalCustomer extends Customer {
    // Shadowing parent function
    IsValid(): boolean {
        if (this.CustomerId.length == 0) {
            return false;
        }
        if (this.CustomerName.length == 0) {
            return false;
        }
        
        return true;
    }
}
