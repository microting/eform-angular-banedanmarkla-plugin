import {ReportPnFullModel, ReportPnGenerateModel} from '../../items-planning-pn/models/report';
import {OperationDataResult} from '../../../../common/models';
import {Observable} from 'rxjs';
import {BaseService} from '../../../../common/services/base.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

export let BaneDanmarkLaPnReportsMethods = {
  Reports: 'api/bane-danmark-la-pn/report',
};

@Injectable()
export class BaneDanmarkLaPnReportsService extends BaseService {
  constructor(private _http: HttpClient, router: Router, toastrService: ToastrService) {
    super(_http, router, toastrService);
  }

  generateReport(model: ReportPnGenerateModel): Observable<OperationDataResult<ReportPnFullModel>> {
    return this.get(BaneDanmarkLaPnReportsMethods.Reports, model);
  }

  getGeneratedReport(model: ReportPnGenerateModel): Observable<any> {
    return this.getBlobData(BaneDanmarkLaPnReportsMethods.Reports + '/excel', model);
  }

}
