import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { FieldType, FieldTypeConfig, FormlyModule } from "@ngx-formly/core";
// material-autocomplete.type.ts
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatAutocompleteModule,
  MatAutocompleteTrigger,
} from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { FormlyMaterialModule } from "@ngx-formly/material";
import { map, startWith } from "rxjs";
@Component({
  selector: "app-custom-autocomplete",
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    FormlyModule,
    MatInputModule,
    CommonModule,
    FormlyMaterialModule,
  ],
  templateUrl: "./custom-autocomplete.component.html",
  styleUrl: "./custom-autocomplete.component.scss",
})
export class CustomAutocompleteComponent
  extends FieldType<FieldTypeConfig>
  implements AfterViewInit
{
  @ViewChild(MatAutocompleteTrigger) autocomplete!: MatAutocompleteTrigger;

  filteredOptions: string[] = [];
  filteredOptions$: any;

  ngAfterViewInit() {
    const filteredOptions = <any[]>this.props.options || [];
    this.filteredOptions$ = this.formControl.valueChanges.pipe(
      startWith(""), // Start with an empty value
      map((value) => this.filterOptions(value, filteredOptions)), // Filter options
    );
  }

  private filterOptions(value: string, options: string[]): string[] {
    if (!value) return options;
    const inputValue = value.toLowerCase();
    return options.filter((option) =>
      option.toLowerCase().includes(inputValue),
    );
  }
}
