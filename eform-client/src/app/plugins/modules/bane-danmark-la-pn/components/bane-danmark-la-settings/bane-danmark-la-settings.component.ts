import {ChangeDetectorRef, Component, EventEmitter, OnInit} from '@angular/core';
import {TemplateListModel, TemplateRequestModel} from '../../../../../common/models/eforms';
import {Router} from '@angular/router';
import {EFormService} from '../../../../../common/services/eform';
import {EntitySearchService} from '../../../../../common/services/advanced';
import {debounceTime, switchMap} from 'rxjs/operators';
import {BaneDanmarkLaPnSettingsService} from '../../services';
import {BaneDanmarkLaBaseSettingsModel} from '../../models/bane-danmark-la-base-settings.model';

@Component({
  selector: 'app-bane-danmark-la-settings',
  templateUrl: './bane-danmark-la-settings.component.html',
  styleUrls: ['./bane-danmark-la-settings.component.scss']
})
export class BaneDanmarkLaSettingsComponent implements OnInit {
  spinnerStatus = false;
  typeahead = new EventEmitter<string>();
  settingsModel: BaneDanmarkLaBaseSettingsModel = new BaneDanmarkLaBaseSettingsModel();
  templatesModel: TemplateListModel = new TemplateListModel();
  templateRequestModel: TemplateRequestModel = new TemplateRequestModel();

  constructor(
    private baneDanmarkLaPnSettingsService: BaneDanmarkLaPnSettingsService,
    private router: Router,
    private eFormService: EFormService,
    private entitySearchService: EntitySearchService,
    private cd: ChangeDetectorRef) {
    this.typeahead
      .pipe(
        debounceTime(200),
        switchMap(term => {
          this.templateRequestModel.nameFilter = term;
          return this.eFormService.getAll(this.templateRequestModel);
        })
      )
      .subscribe(items => {
        this.templatesModel = items.model;
        this.cd.markForCheck();
      });
  }

  ngOnInit() {
    this.getSettings();
  }

  getSettings() {
    this.spinnerStatus = true;
    this.baneDanmarkLaPnSettingsService.getAllSettings().subscribe((data) => {
      if (data && data.success) {
        this.settingsModel = data.model;
      } this.spinnerStatus = false;
    });
  }
  updateSettings() {
    this.spinnerStatus = true;
    this.baneDanmarkLaPnSettingsService.updateSettings(this.settingsModel)
      .subscribe((data) => {
        if (data && data.success) {

        } this.spinnerStatus = false;
      });
  }
}
