import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent {

  @Input()
  icon = 'user';
  subtitle = 'subtitle';
  inputType = 'text';
  name = '';
  defaultInputValue = '';

  @Output() changeValueEvent = new EventEmitter<string>();

  input = new FormControl(this.defaultInputValue);

  returnInputValue(value: string): void {
    this.changeValueEvent.emit(value);
  }

  checkIconType(): boolean {
    return this.icon.includes('bi ');
  }
}
