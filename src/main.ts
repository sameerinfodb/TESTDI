import { enableProdMode, InjectionToken } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
export const MAGIC_NUMBER = new InjectionToken<{}>("MAGIC_NUMBER");
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([
  {
    provide: MAGIC_NUMBER,
    useValue: 111
  }
])
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
