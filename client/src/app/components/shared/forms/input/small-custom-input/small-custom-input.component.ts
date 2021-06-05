import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-small-custom-input',
  templateUrl: './small-custom-input.component.html',
  styleUrls: ['./small-custom-input.component.scss']
})
export class SmallCustomInputComponent {
  
  @Input() icon: string | false | null = false;
  @Input() inputType = 'text';
  @Input() name = '';
  @Input() defaultInputValue = '';
  @Input() placeholder = 'placeholder';
  @Input() className = '';

  @Output() changeValueEvent = new EventEmitter<string>();
  @Output() submitEvent = new EventEmitter<string>();

  input = new FormControl(this.defaultInputValue);

}
