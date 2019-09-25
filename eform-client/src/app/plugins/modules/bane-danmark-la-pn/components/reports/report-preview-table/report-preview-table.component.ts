import {ChangeDetectorRef, Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {debounceTime, switchMap} from 'rxjs/operators';
import {SharedPnService} from '../../../../shared/services';
import {TemplateListModel, TemplateRequestModel} from '../../../../../../common/models/eforms';
import {PageSettingsModel} from '../../../../../../common/models/settings';
import {EFormService} from '../../../../../../common/services/eform';


@Component({
  selector: 'app-report-preview-table',
  templateUrl: './report-preview-table.component.html',
  styleUrls: ['./report-preview-table.component.scss']
})
export class ReportPreviewTableComponent implements OnInit {
  typeahead = new EventEmitter<string>();
  templatesModel: TemplateListModel = new TemplateListModel();
  templateRequestModel: TemplateRequestModel = new TemplateRequestModel();
  localPageSettings: PageSettingsModel = new PageSettingsModel();
  spinnerStatus = false;
  thisYear = new Date().getFullYear();
  years: number[] = [];
  selectedView: string;
  constructor(private eFormService: EFormService, private cd: ChangeDetectorRef, private sharedPnService: SharedPnService) {
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
    this.getAllYears();
  }


  getSelectedView(viewName: string) {  }

  getAllYears() {
    if (this.thisYear >= 2019) {
      for (let i = 2019; i <= this.thisYear; i++) {
        this.years.push(i);
      }
    }
    return this.years;
  }
}
