jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/offline/Offline/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/offline/Offline/test/integration/pages/App",
	"com/offline/Offline/test/integration/pages/Browser",
	"com/offline/Offline/test/integration/pages/Master",
	"com/offline/Offline/test/integration/pages/Detail",
	"com/offline/Offline/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.offline.Offline.view."
	});

	sap.ui.require([
		"com/offline/Offline/test/integration/NavigationJourneyPhone",
		"com/offline/Offline/test/integration/NotFoundJourneyPhone",
		"com/offline/Offline/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});