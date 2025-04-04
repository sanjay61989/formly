import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { FormlyFieldConfig, FormlyModule } from "@ngx-formly/core";
import { FormlyMaterialModule } from "@ngx-formly/material";
@Component({
  selector: "app-custom-formly",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule,
    MatButtonModule,
  ],
  templateUrl: "./custom-formly.component.html",
  styleUrl: "./custom-formly.component.scss",
})
export class CustomFormlyComponent {
  form = new FormGroup({});
  model = { email: "", city: "" };
  fields: FormlyFieldConfig[] = [
    {
      key: "email",
      type: "input",
      props: {
        label: "Email address",
        placeholder: "Enter email",
        required: true,
      },
    },
    {
      key: "city",
      type: "autocomplete",
      templateOptions: {
        label: "City",
        placeholder: "Type to search",
        required: true,
        options: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
      },
    },
  ];

  onSubmit(model: any) {
    console.log(model);
  }
}
