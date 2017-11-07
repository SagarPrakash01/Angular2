import {Injectable} from "@angular/core";

import {Customer} from "../Model/Customer";
import {LoyalCustomer} from "../Model/LoyalCustomer";

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