import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent {

  @Input() icon = 'user';
  @Input() subtitle = 'subtitle';
  @Input() inputType = 'text';
  @Input() name = '';
  @Input() defaultInputValue = '';
  @Input() placeholder = 'placeholder';
  @Input() className = '';

  @Output() changeValueEvent = new EventEmitter<string>();
  @Output() iconClickEvent = new EventEmitter<string>();

  input = new FormControl(this.defaultInputValue);

  returnInputValue(value: string): void {
    this.changeValueEvent.emit(value);
  }

  public checkIconType(): boolean {
    return this.icon.includes('bi ');
  }

  iconClick(): void {
    this.iconClickEvent.emit();
  }
}
