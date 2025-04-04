import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
@Component({
  selector: 'app-custom-formly',

  templateUrl: './custom-formly.component.html',
  styleUrl: './custom-formly.component.scss',
})
export class CustomFormlyComponent {
  form = new FormGroup({});
  model = { email: '', city: '' };
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
        label: 'City',
        placeholder: 'Type to search',
        required: true,
        options: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
      },
    },
  ];

  onSubmit(model: any) {
    console.log(model);
  }
}
