import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomFormlyComponent } from './custom-formly/custom-formly.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatButtonModule } from '@angular/material/button';
import { CustomAutocompleteComponent } from './custom-autocomplete/custom-autocomplete.component';
@NgModule({
  declarations: [AppComponent, CustomFormlyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'autocomplete',
          component: CustomAutocompleteComponent,
        },
      ],
    }),
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
