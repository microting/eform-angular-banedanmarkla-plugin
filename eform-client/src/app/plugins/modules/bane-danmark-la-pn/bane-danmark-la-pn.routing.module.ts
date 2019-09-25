import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminGuard, AuthGuard} from 'src/app/common/guards';
import {BaneDanmarkLaPnLayoutComponent} from './layouts/bane-danmark-la-pn-layout.component';
import {BaneDanmarkLaSettingsComponent} from './components/bane-danmark-la-settings';
import {ReportPreviewTableComponent} from './components/reports';
import {BaneDanmarkLaViewComponent} from './components/bane-danmark-la-view';


export const routes: Routes = [
  {
    path: '',
    component: BaneDanmarkLaPnLayoutComponent,
    children: [
      {
        path: 'viewLa',
        canActivate: [AdminGuard],
        component: BaneDanmarkLaViewComponent
      },
      {
        path: 'settings',
        canActivate: [AdminGuard],
        component: BaneDanmarkLaSettingsComponent
      },
      {
        path: 'reports',
        canActivate: [AdminGuard],
        component: ReportPreviewTableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaneDanmarkLaPnRouting {
}
