
import {Injectable} from "@angular/core";
import {Customer, LoyalCustomer} from "../Model/Customer";

@Injectable()
export class FactoryCustomer {
    public Create(TypeOfCustomer): Customer {
        if (TypeOfCustomer == "Customer") {
            return new Customer();
        }
        else {
            return new LoyalCustomer();
        }
    }
}