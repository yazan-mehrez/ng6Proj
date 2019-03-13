import {AbstractControl, ValidatorFn} from '@angular/forms';

export function forbiddenNameValidator(nameReg: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const forbidden = nameReg.test(control.value);
        return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
}
