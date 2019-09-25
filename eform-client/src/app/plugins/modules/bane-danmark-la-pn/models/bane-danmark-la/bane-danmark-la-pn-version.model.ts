import {BaneDanmarkLaPnCaseStatusModel} from './bane-danmark-la-pn-case-status.model';

export class BaneDanmarkLaVersionsPnModel {
  baneDanmarkLaVersionList: Array<BaneDanmarkLaVersionPnModel> = [];
  baneDanmarkLaCaseStatusModels: Array<BaneDanmarkLaPnCaseStatusModel> = [];
  token: string;
  baneDanmarkLaId: number;
}

export class BaneDanmarkLaVersionPnModel {
  id: number;
  name: string;
  date: Date;
  time: Date;
  token: string;
  createdAt: Date;
  createdBy: string;
  title: string;
  showFrom: Date;
  showTo: Date;
  status: boolean;
}
