import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { getStates } from '../getStates';
import { DropdownOption } from '../autocomplete-object/autocomplete-object.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  //Data

  //Config
  title = 'formly';
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  options2: DropdownOption[] = [
    {
      value: '1',
      label: 'One',
    },
    {
      value: '2',
      label: 'Two',
    },
    {
      value: '3',
      label: 'Three',
    },
  ];
  model = { email: '', city: '1' };
  states = getStates();

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
        options: this.options2,
      },
    },
  ];

  onSubmit(model: any) {
    console.log(model);
  }
}
