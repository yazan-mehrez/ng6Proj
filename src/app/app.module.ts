import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeesComponent} from './employees/employees.component';
import {FormsComponent} from './forms/forms.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomValidatorDirective } from './directives/custom-validator.directive';
import {NgxLoadingModule} from 'ngx-loading';
import { AnimationComponent } from './animation/animation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InternationalizationComponent } from './internationalization/internationalization.component';

@NgModule({
    declarations: [
        AppComponent,
        EmployeesComponent,
        FormsComponent,
        CustomValidatorDirective,
        AnimationComponent,
        InternationalizationComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FormsModule,
        NgxLoadingModule.forRoot({}),
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
