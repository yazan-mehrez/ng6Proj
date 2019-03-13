import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, ValidationErrors, Validators} from '@angular/forms';
import {forbiddenNameValidator} from '../classes/forbiddenNameValidator';
import {ngxLoadingAnimationTypes} from 'ngx-loading';


const PrimaryRed = '#fff';
const SecondaryBlue = '#e23030';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
    errorsList: any = [];
    public primaryColour = PrimaryRed;
    public secondaryColour = SecondaryBlue;


    public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;

    regEx = new RegExp('^[A-Z]+$');
    profileForm = this.fb.group({
        firstName: ['', [Validators.required, forbiddenNameValidator(this.regEx)]],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email], this.checkValidEmail]
        // phones: this.fb.array([
        //     this.fb.control('', [Validators.required]),
        //     this.fb.control('')])
    });
    loading: boolean;

    constructor(private fb: FormBuilder) {
    }

    get phones() {
        return this.profileForm.get('phones') as FormArray;
    }

    checkValidEmail(control: AbstractControl) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'super@secret.com') {
                    resolve({emailIsToken: true});
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }

    AddPhone() {
        this.phones.push(this.fb.control(''));
    }

    getFormValidationErrors() {
        this.errorsList = [];
        Object.keys(this.profileForm.controls).forEach(key => {

            const controlErrors: ValidationErrors = this.profileForm.get(key).errors;
            if (controlErrors != null) {
                Object.keys(controlErrors).forEach(keyError => {
                    // console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
                    this.errorsList.push({control: key, error: keyError, status: controlErrors[keyError]});
                    console.log(this.errorsList);
                });
            }
        });
    }

    onSubmit() {
        console.log(this.profileForm.value);
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
        }, 3000);
    }

    ngOnInit() {

    }

}
