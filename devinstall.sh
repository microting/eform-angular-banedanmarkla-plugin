#!/bin/bash
cd ~
pwd

rm -fR Documents/workspace/microting/eform-angular-frontend/eform-client/src/app/plugins/modules/bane-danmark-la-pn

cp -a Documents/workspace/microting/eform-angular-banedanmarkla-plugin/eform-client/src/app/plugins/modules/monitoring-pn Documents/workspace/microting/eform-angular-frontend/eform-client/src/app/plugins/modules/bane-danmark-la-pn

rm -fR Documents/workspace/microting/eform-angular-frontend/eFormAPI/Plugins/BaneDanmarkLa.Pn

cp -a Documents/workspace/microting/eform-angular-banedanmarkla-plugin/eFormAPI/Plugins/BaneDanmarkLa.Pn Documents/workspace/microting/eform-angular-frontend/eFormAPI/Plugins/BaneDanmarkLa.Pn

# Test files rm
rm -fR Documents/workspace/microting/eform-angular-frontend/eform-client/e2e/Tests/bane-danmark-la-settings
rm -fR Documents/workspace/microting/eform-angular-frontend/eform-client/e2e/Tests/bane-danmark-la-general
rm -fR Documents/workspace/microting/eform-angular-frontend/eform-client/e2e/Page\ objects/bane-danmark-la
rm -fR Documents/workspace/microting/eform-angular-frontend/eform-client/wdio-plugin-step2.conf.js

# Test files cp
cp -a Documents/workspace/microting/eform-angular-banedanmarkla-plugin/eform-client/e2e/Tests/bane-danmark-la-settings Documents/workspace/microting/eform-angular-frontend/eform-client/e2e/Tests/bane-danmark-la-settings
cp -a Documents/workspace/microting/eform-angular-banedanmarkla-plugin/eform-client/e2e/Tests/bane-danmark-la-general Documents/workspace/microting/eform-angular-frontend/eform-client/e2e/Tests/bane-danmark-la-general
cp -a Documents/workspace/microting/eform-angular-banedanmarkla-plugin/eform-client/e2e/Page\ objects/bane-danmark-la Documents/workspace/microting/eform-angular-frontend/eform-client/e2e/Page\ objects/bane-danmark-la
cp -a Documents/workspace/microting/eform-angular-banedanmarkla-plugin/eform-client/wdio-headless-plugin-step2.conf.js Documents/workspace/microting/eform-angular-frontend/eform-client/wdio-plugin-step2.conf.js
