import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { of } from 'rxjs';
import { getStates } from './getStates';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'formly';
  form = new FormGroup({});
  options: FormlyFormOptions = {};

  model = { email: '', city: '', city2: '' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
    },
    {
      key: 'city',
      type: 'autocomplete',
      templateOptions: {
        type: 'input',
        label: 'City',
        placeholder: 'Type to search',
        required: true,
        filter: (term: string) => of(term ? this.filterStates(term) : this.states.slice()),
      },
    },
  ];

  states = getStates();

  filterStates(name: string) {
    return this.states.filter((state) => state.toLowerCase().includes(name.toLowerCase()));
  }

  onSubmit(model: any) {
    console.log(model);
  }
}
