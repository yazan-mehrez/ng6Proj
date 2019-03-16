import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AnimationComponent} from './animation/animation.component';
import {FormsComponent} from './forms/forms.component';
import {InternationalizationComponent} from './internationalization/internationalization.component';
import {EmployeesComponent} from './employees/employees.component';

const routes: Routes = [
    {
        path: 'home',
        component: FormsComponent
    },
    {
        path: 'animation',
        component: AnimationComponent,
        data: {animation: 'routerAnimation'}
    },
    {
        path: 'internationalization',
        component: InternationalizationComponent
    },
    {
        path: 'employees',
        component: EmployeesComponent
    },
    {
        path: '',
        component: FormsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
