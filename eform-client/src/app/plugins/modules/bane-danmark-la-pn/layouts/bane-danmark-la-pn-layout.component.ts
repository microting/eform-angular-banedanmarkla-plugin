import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LocaleService} from 'src/app/common/services/auth';
import {SharedPnService} from '../../shared/services';
import {BaneDanmarkLaPnLocalSettings} from '../enums/bane-danmark-la-pn-local-settings.const';
declare var require: any;

@Component({
  selector: 'app-bane-danmark-la-pn-layout',
  template: `<router-outlet></router-outlet>`
})
export class BaneDanmarkLaPnLayoutComponent implements AfterViewInit, OnInit {

  constructor(private localeService: LocaleService,
              private translateService: TranslateService,
              private sharedPnService: SharedPnService) {

  }

  ngOnInit() {
    this.sharedPnService.initLocalPageSettings('baneDanmarkLaPnSettings', BaneDanmarkLaPnLocalSettings);
  }


  ngAfterViewInit() {
    setTimeout(() => {
      const lang = this.localeService.getCurrentUserLocale();
      const i18n = require(`../i18n/${lang}.json`);
      this.translateService.setTranslation(lang, i18n, true);
    }, 1000);

  }
}
