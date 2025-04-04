import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
// material-autocomplete.type.ts
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { map, startWith } from 'rxjs';
@Component({
  selector: 'app-custom-autocomplete',
  templateUrl: './custom-autocomplete.component.html',
  styleUrl: './custom-autocomplete.component.scss',
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
      startWith(''), // Start with an empty value
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
