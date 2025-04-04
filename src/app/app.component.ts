import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'formly';
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
        type: 'input',
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
