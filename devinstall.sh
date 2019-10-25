#!/bin/bash
cd ~
pwd

if [ -d "Documents/workspace/microting/eform-angular-frontend/eform-client/src/app/plugins/modules/bane-danmark-la-pn" ]; then
	rm -fR Documents/workspace/microting/eform-angular-frontend/eform-client/src/app/plugins/modules/bane-danmark-la-pn
fi

cp -av Documents/workspace/microting/eform-angular-banedanmarkla-plugin/eform-client/src/app/plugins/modules/bane-danmark-la-pn Documents/workspace/microting/eform-angular-frontend/eform-client/src/app/plugins/modules/bane-danmark-la-pn

if [ -d "Documents/workspace/microting/eform-angular-frontend/eFormAPI/Plugins/BaneDanmarkLa.Pn" ]; then
	rm -fR Documents/workspace/microting/eform-angular-frontend/eFormAPI/Plugins/BaneDanmarkLa.Pn
fi

cp -av Documents/workspace/microting/eform-angular-banedanmarkla-plugin/eFormAPI/Plugins/BaneDanmarkLa.Pn Documents/workspace/microting/eform-angular-frontend/eFormAPI/Plugins/BaneDanmarkLa.Pn
