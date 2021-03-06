import { Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[dTextInput]',
  exportAs: 'dTextInput',
})
export class TextDirective {
  @Input() @HostBinding('class.error') error: boolean;
  constructor() { }

}
