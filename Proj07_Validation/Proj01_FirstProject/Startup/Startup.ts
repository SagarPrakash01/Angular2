import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {MainModuleModule} from "../Binder/Module/MainModule";

const platform = platformBrowserDynamic();
platform.bootstrapModule(MainModuleModule);

