import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuardChild} from '../auth/auth-guard-child.service';
import {AuthGuard} from '../auth/auth-guard.service';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskComponent} from './task/task.component';

const appRoutes = [
    {
        path: '',
        component: TaskListComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuardChild],
        children: [
            {path: 'new', component: TaskComponent},
            {path: '**', component: PageNotFoundComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
