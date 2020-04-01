import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {PageSettingsModel} from '../../../../../common/models/settings';
import {SharedPnService} from '../../../shared/services';
import {BaneDanmarkLaPnSettingsService} from '../../services';
import {BaneDanmarkLaVersionsPnModel} from '../../models/bane-danmark-la/bane-danmark-la-pn-version.model';
import {BaneDanmarkLaPnBaneDanmarkLaService} from '../../services/bane-danmark-la-pn-bane-danmark-la.service';
import {CaseTemplateRequestModel} from '../../models/bane-danmark-la/case-template-pn-request.model';
import {CaseTemplatesPnModel, CaseTemplatePnModel} from '../../models/bane-danmark-la/case-template-pn.model';

@Component({
  selector: 'app-bane-danmark-la-pn-bane-danmark-la-version-view',
  templateUrl: './bane-danmark-la-view.component.html',
  styleUrls: ['./bane-danmark-la-view.component.scss']
})
export class BaneDanmarkLaViewComponent implements OnInit {
  @ViewChild('showPdfModal', {static: false}) showPdfModal;
  @ViewChild('frame', {static: false}) frame;
  spinnerStatus = false;
  localPageSettings: PageSettingsModel = new PageSettingsModel();
  baneDanmarkLaVersionsModel: BaneDanmarkLaVersionsPnModel = new BaneDanmarkLaVersionsPnModel();
  date = new Date().getDate();
  caseTemplateRequestModel: CaseTemplateRequestModel = new CaseTemplateRequestModel();
  caseTemplatesPnModel: CaseTemplatesPnModel = new CaseTemplatesPnModel();
  caseTemplatePnModel: CaseTemplatePnModel = new CaseTemplatePnModel();
  @Output() onLaFetched: EventEmitter<void> = new EventEmitter<void>();
  // selectedBaneDanmarkLaModel: BaneDanmarkLaPnModel = new BaneDanmarkLaPnModel();

  constructor(private sharedPnService: SharedPnService,
              private baneDanmarkLaPnSettingsService: BaneDanmarkLaPnSettingsService,
              private baneDanmarkLaPnBaneDanmarkLaService: BaneDanmarkLaPnBaneDanmarkLaService) { }
  ngOnInit() {
    this.getLocalPageSettings();
  }

  getLocalPageSettings() {
    this.localPageSettings = this.sharedPnService.getLocalPageSettings
    ('baneDanmarkLaPnSettings', 'BaneDanmarkLa').settings;
    this.getAllBaneDanmarkLa();
  }
  updateLocalPageSettings() {
    this.sharedPnService.updateLocalPageSettings
    ('baneDanmarkLaPnSettings', this.localPageSettings, 'BaneDanmarkLa');
    this.getAllBaneDanmarkLa();
  }
  show(baneDanmarkLaId: number) {
    this.spinnerStatus = true;
    this.frame.show();
    this.baneDanmarkLaVersionsModel = new BaneDanmarkLaVersionsPnModel();
    this.getSelectedVersions(baneDanmarkLaId);
  }
  getSelectedVersions(baneDanmarkLaId: number) {
    // debugger;
    this.baneDanmarkLaPnBaneDanmarkLaService.getBaneDanmarkLaVersions(baneDanmarkLaId).subscribe((data) => {
      if (data && data.success) {
        this.baneDanmarkLaVersionsModel = data.model;
      }
      this.spinnerStatus = false;
    });
  }
  getAllBaneDanmarkLa() {
    this.spinnerStatus = true;
    this.caseTemplateRequestModel.isSortDsc = this.localPageSettings.isSortDsc;
    this.caseTemplateRequestModel.sort = this.localPageSettings.sort;
    this.caseTemplateRequestModel.pageSize = this.localPageSettings.pageSize;
    this.baneDanmarkLaPnBaneDanmarkLaService.getAllBaneDanmarkLa(this.caseTemplateRequestModel).subscribe((data) => {
      if (data && data.success) {
        this.caseTemplatesPnModel = data.model;
      } this.spinnerStatus = false;
    });
  }
  fetchLa() {
    // debugger;
    this.baneDanmarkLaPnBaneDanmarkLaService.fetchLa().subscribe((data) => {
      if (data && data.success) {
        this.onLaFetched.emit();
      }
    });
  }
  showLa() {
    this.showPdfModal.show();
  }

}
