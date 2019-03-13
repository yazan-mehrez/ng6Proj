import {Directive} from '@angular/core';
import {NG_VALIDATORS} from '@angular/forms';

@Directive({
    selector: '[appCustomValidator]',
    // providers: [{provide: NG_VALIDATORS, useExisting}]
})
export class CustomValidatorDirective {

    constructor() {
    }

}
