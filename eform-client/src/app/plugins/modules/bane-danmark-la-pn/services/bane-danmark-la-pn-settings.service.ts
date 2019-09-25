import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {OperationDataResult, OperationResult} from '../../../../common/models';
import {BaseService} from '../../../../common/services/base.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {BaneDanmarkLaBaseSettingsModel} from '../models/bane-danmark-la-base-settings.model';

export let BaneDanmarkLaSettingsMethods = {
  BaneDanmarkLaSettings: 'api/bane-danmark-la-pn/settings'

};
@Injectable()
export class BaneDanmarkLaPnSettingsService extends BaseService {

  constructor(private _http: HttpClient, router: Router, toastrService: ToastrService) {
    super(_http, router, toastrService);
  }

  getAllSettings(): Observable<OperationDataResult<BaneDanmarkLaBaseSettingsModel>> {
    return this.get(BaneDanmarkLaSettingsMethods.BaneDanmarkLaSettings);
  }
  updateSettings(model: BaneDanmarkLaBaseSettingsModel): Observable<OperationResult> {
    return this.post(BaneDanmarkLaSettingsMethods.BaneDanmarkLaSettings, model);
  }
}
