#!/bin/bash
if [ ! -d "/var/www/microting/" ]; then
	export plugin_count=0
else
	export current_folder=`pwd`
	cd /var/www/microting
	export plugin_count=`ls -lah | grep angular | grep plugin | wc -l`
	cd $current_folder
fi
export TAB=$'\t'
if (( $plugin_count > 1 )); then
	sed '/\/\/ INSERT ROUTES HERE/i ,{' src/app/plugins/plugins.routing.ts -i
	sed '/\/\/ INSERT ROUTES HERE/i path: "bane-danmark-la-pn",' src/app/plugins/plugins.routing.ts -i
	sed '/\/\/ INSERT ROUTES HERE/i canActivate: [AuthGuard],' src/app/plugins/plugins.routing.ts -i
	sed '/\/\/ INSERT ROUTES HERE/i loadChildren: "./modules/bane-danmark-la-pn/bane-danmark-la-pn.module#BaneDanmarkLaPnModule"' src/app/plugins/plugins.routing.ts -i
	sed '/\/\/ INSERT ROUTES HERE/i }' src/app/plugins/plugins.routing.ts -i
else
	sed '/\/\/ INSERT ROUTES HERE/i {' src/app/plugins/plugins.routing.ts -i
	sed '/\/\/ INSERT ROUTES HERE/i path: "bane-danmark-la-pn",' src/app/plugins/plugins.routing.ts -i
	sed '/\/\/ INSERT ROUTES HERE/i canActivate: [AuthGuard],' src/app/plugins/plugins.routing.ts -i
	sed '/\/\/ INSERT ROUTES HERE/i loadChildren: "./modules/bane-danmark-la-pn/bane-danmark-la-pn.module#BaneDanmarkLaPnModule"' src/app/plugins/plugins.routing.ts -i
	sed '/\/\/ INSERT ROUTES HERE/i }' src/app/plugins/plugins.routing.ts -i
	sed "s/\"/'/g" src/app/plugins/plugins.routing.ts -i
fi

