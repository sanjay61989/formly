import { Component } from '@angular/core';
import { CustomAutocompleteComponent } from './custom-autocomplete/custom-autocomplete.component';
import { CustomFormlyComponent } from './custom-formly/custom-formly.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomFormlyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'formly';
}
