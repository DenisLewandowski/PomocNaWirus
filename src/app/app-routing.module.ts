import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {GeneralSettingsComponent} from './settings/general-settings/general-settings.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'settings',
        component: GeneralSettingsComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ])
  ]
})
export class AppRoutingModule {
}
