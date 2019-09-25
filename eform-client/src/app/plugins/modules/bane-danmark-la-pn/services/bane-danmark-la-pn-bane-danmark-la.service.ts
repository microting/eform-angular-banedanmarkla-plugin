import {BaseService} from '../../../../common/services/base.service';
import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {OperationDataResult, OperationResult} from '../../../../common/models';
import {BaneDanmarkLaVersionsPnModel} from '../models/bane-danmark-la/bane-danmark-la-pn-version.model';
import {Observable} from 'rxjs';
import {CaseTemplatePnModel, CaseTemplatesPnModel} from '../models/bane-danmark-la/case-template-pn.model';
import {CaseTemplateRequestModel} from '../models/bane-danmark-la/case-template-pn-request.model';

export let BaneDanmarkLaPnBaneDanmarkLaMethods = {
  BaneDanmarkLaVersions: 'api/bane-danmark-la-pn/versions',
  BaneDanmarkLa: 'api/case-template/get-all',
  FetchLa: 'api/case-template/create-case-template'
};

@Injectable()
export class BaneDanmarkLaPnBaneDanmarkLaService extends BaseService {
  constructor(private _http: HttpClient, router: Router, toastrService: ToastrService) {
    super(_http, router, toastrService);
  }

  getAllBaneDanmarkLa(model: CaseTemplateRequestModel): Observable<OperationDataResult<CaseTemplatesPnModel>> {
    return this.get(BaneDanmarkLaPnBaneDanmarkLaMethods.BaneDanmarkLa, model);
  }

  getSingleBaneDanmarkLa(baneDanmarkLaId: number): Observable<OperationDataResult<CaseTemplatePnModel>> {
    return this.get(BaneDanmarkLaPnBaneDanmarkLaMethods.BaneDanmarkLa + '/' + baneDanmarkLaId);
  }

  getBaneDanmarkLaVersions(baneDanmarkLaId: number): Observable<OperationDataResult<BaneDanmarkLaVersionsPnModel>> {
    return this.get(BaneDanmarkLaPnBaneDanmarkLaMethods.BaneDanmarkLaVersions + '/' + baneDanmarkLaId);
  }

  fetchLa(): Observable<OperationResult> {
    return this.post(BaneDanmarkLaPnBaneDanmarkLaMethods.FetchLa, 1);
  }
}
