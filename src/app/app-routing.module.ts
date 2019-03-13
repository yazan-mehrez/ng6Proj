import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AnimationComponent} from './animation/animation.component';
import {FormsComponent} from './forms/forms.component';

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
