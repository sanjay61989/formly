import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import { FieldTypeConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'formly-autocomplete-type',
  templateUrl: './autocomplete-type.component.html',
})
export class AutocompleteTypeComponent extends FieldType<FieldTypeConfig> implements OnInit {
  filter: Observable<any>;

  ngOnInit() {
    this.filter = this.formControl.valueChanges.pipe(
      startWith(''),
      switchMap((term) => this.props.filter(term)),
    );
  }
}
