import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatButtonModule } from '@angular/material/button';
import { CustomAutocompleteComponent } from './custom-autocomplete/custom-autocomplete.component';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@NgModule({
  declarations: [AppComponent, CustomAutocompleteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyMatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'autocomplete',
          component: CustomAutocompleteComponent,
        },
      ],
      validationMessages: [
        { name: 'required', message: 'Value dall chup chaap' },
      ],
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
export class AppModule {}
