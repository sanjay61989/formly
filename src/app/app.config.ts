import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";

import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { FormlyModule } from "@ngx-formly/core";
import { routes } from "./app.routes";
import { CustomAutocompleteComponent } from "./custom-autocomplete/custom-autocomplete.component";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync("noop"),
    importProvidersFrom(
      FormlyModule.forRoot({
        validationMessages: [
          { name: "required", message: "This field is required1111" },
        ],
        types: [
          {
            name: "autocomplete",
            component: CustomAutocompleteComponent,
            wrappers: ["form-field"],
          },
        ],
      }),
    ),
  ],
};
