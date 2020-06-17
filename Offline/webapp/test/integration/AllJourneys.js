jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 TransferOrderSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/offline/Offline/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/offline/Offline/test/integration/pages/App",
	"com/offline/Offline/test/integration/pages/Browser",
	"com/offline/Offline/test/integration/pages/Master",
	"com/offline/Offline/test/integration/pages/Detail",
	"com/offline/Offline/test/integration/pages/Create",
	"com/offline/Offline/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.offline.Offline.view."
	});

	sap.ui.require([
		"com/offline/Offline/test/integration/MasterJourney",
		"com/offline/Offline/test/integration/NavigationJourney",
		"com/offline/Offline/test/integration/NotFoundJourney",
		"com/offline/Offline/test/integration/BusyJourney",
		"com/offline/Offline/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});