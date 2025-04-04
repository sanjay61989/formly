import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import { FieldTypeConfig } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { mdiCheck } from '@mdi/js';

export interface DropdownOption {
  value: string;
  label: string;
  selected?: boolean;
}

@Component({
  selector: 'autocomplete-object',
  templateUrl: './autocomplete-object.component.html',
  styleUrl: './autocomplete-object.component.css',
})
export class AutocompleteObjectComponent extends FieldType<FieldTypeConfig> implements OnInit {
  checkIconPath = mdiCheck;
  filteredOptions: Observable<DropdownOption[]> = of([]);
  filter: Observable<any[]>;

  private optionsMap: Map<string, DropdownOption> = new Map();
  private previouslySelectedOption: DropdownOption | null = null;

  ngOnInit() {
    if (!this.props.options) return;
    // Initialize options map
    this.optionsMap = new Map(
      (this.props.options as DropdownOption[]).map((option) => [option.value.toString(), option]),
    );

    // Setup filtered options observable
    this.filteredOptions = this.formControl.valueChanges.pipe(
      startWith(''),
      map((value) => this.filterOptionsByLabel(value)),
    );

    // Ensure form control value is properly set
    queueMicrotask(() => {
      if (this.formControl.value && typeof this.formControl.value === 'string') {
        this.setControlValue();
      }
    });
  }

  private setControlValue() {
    const value = this.formControl.value;
    if (!value) return;
    let selectedOption;
    const key = typeof value === 'string' ? value : value.value;
    selectedOption = this.optionsMap.get(key) ?? { selected: false };
    selectedOption.selected = true;
    this.formControl.setValue(selectedOption);
    this.previouslySelectedOption = selectedOption as DropdownOption;
  }

  displayLabelFn(value: DropdownOption) {
    return value ? value?.label : '';
  }

  trackByIdFn(_index: number, option: DropdownOption) {
    return option.value.toString();
  }

  filterOptionsByLabel(label: string): DropdownOption[] {
    if (typeof label !== 'string') return this.props.options as DropdownOption[];
    return (this.props.options as DropdownOption[]).filter((option: DropdownOption) => {
      return option.label.toLowerCase().includes(label.trim().toLowerCase());
    });
  }

  onOptionSelected(selectedOption: DropdownOption) {
    if (this.previouslySelectedOption) {
      this.previouslySelectedOption.selected = false;
    }
    selectedOption.selected = true;
    this.previouslySelectedOption = selectedOption;
    this.formControl.setValue(selectedOption);
  }
}
