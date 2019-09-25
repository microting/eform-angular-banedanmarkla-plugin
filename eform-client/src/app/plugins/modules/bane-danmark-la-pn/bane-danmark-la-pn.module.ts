import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {MDBBootstrapModule} from 'port/angular-bootstrap-md';
import {NgSelectModule} from '@ng-select/ng-select';
import {BaneDanmarkLaPnRouting} from './bane-danmark-la-pn.routing.module';
import {SharedPnModule} from '../shared/shared-pn.module';
import {EformSharedModule} from '../../../common/modules/eform-shared/eform-shared.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {GoogleChartsModule} from 'angular-google-charts';
import {BaneDanmarkLaSettingsComponent} from './components/bane-danmark-la-settings';
import {BaneDanmarkLaPnSettingsService} from './services';
import {BaneDanmarkLaPnLayoutComponent} from './layouts/bane-danmark-la-pn-layout.component';
import {ReportPreviewTableComponent} from './components/reports/report-preview-table/report-preview-table.component';
import {BaneDanmarkLaViewComponent} from './components/bane-danmark-la-view/bane-danmark-la-view.component';
import {BaneDanmarkLaPnReportsService} from './services/bane-danmark-la-pn-reports.service';
import {BaneDanmarkLaPnBaneDanmarkLaService} from './services/bane-danmark-la-pn-bane-danmark-la.service';
import {ShowPdfModalComponent} from './components/show-pdf-modal/show-pdf-modal.component';

@NgModule({
  imports: [
    CommonModule,
    SharedPnModule,
    MDBBootstrapModule,
    BaneDanmarkLaPnRouting,
    TranslateModule,
    FormsModule,
    NgSelectModule,
    EformSharedModule,
    FontAwesomeModule,
    GoogleChartsModule
  ],
  declarations: [
    BaneDanmarkLaPnLayoutComponent,
    BaneDanmarkLaSettingsComponent,
    BaneDanmarkLaViewComponent,
    ReportPreviewTableComponent,
    ShowPdfModalComponent
  ],
  providers: [
    BaneDanmarkLaPnSettingsService,
    BaneDanmarkLaPnReportsService,
    BaneDanmarkLaPnBaneDanmarkLaService

  ]
})
export class BaneDanmarkLaPnModule { }
