import {ApplicationPageModel, PageSettingsModel} from '../../../../common/models/settings';

export const BaneDanmarkLaPnLocalSettings = [
  new ApplicationPageModel({
      name: 'BaneDanmarkLa',
      settings: new PageSettingsModel({
        pageSize: 10,
        sort: 'Id',
        isSortDsc: false
      })
    }
  )];
