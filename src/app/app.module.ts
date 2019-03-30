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
import {HttpClientModule} from '@angular/common/http';
import { SWorkerComponent } from './s-worker/s-worker.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        EmployeesComponent,
        FormsComponent,
        CustomValidatorDirective,
        AnimationComponent,
        InternationalizationComponent,
        SWorkerComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        NgxLoadingModule.forRoot({}),
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
