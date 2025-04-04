import { NgModule } from '@angular/core';
import { AppComponent } from './app-component/app.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { AutocompleteTypeComponent } from './autocomplete-type/autocomplete-type.component';
import { AutocompleteObjectComponent } from './autocomplete-object/autocomplete-object.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import * as mdiIcons from '@mdi/js';

@NgModule({
  declarations: [AppComponent, AutocompleteTypeComponent, AutocompleteObjectComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormlyMaterialModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'autocomplete',
          component: AutocompleteObjectComponent,
          wrappers: ['form-field'],
        },
        {
          name: 'autocomplete2',
          component: AutocompleteTypeComponent,
          wrappers: ['form-field'],
        },
      ],
      validationMessages: [{ name: 'required', message: 'Value Daal Chup Chaap' }],
    }),
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // Loop through all mdiIcons and register them
    Object.entries(mdiIcons).forEach(([key, path]) => {
      iconRegistry.addSvgIconLiteral(
        key,
        sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 24 24"><path d="${path}" /></svg>`),
      );
    });
  }
}
