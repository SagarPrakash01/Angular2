import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {CustomerModule} from "../Binder/Module/CustomerModule";

const platform = platformBrowserDynamic();
platform.bootstrapModule(CustomerModule);

