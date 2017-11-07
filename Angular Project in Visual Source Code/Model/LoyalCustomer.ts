import {Customer} from "./Customer";

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