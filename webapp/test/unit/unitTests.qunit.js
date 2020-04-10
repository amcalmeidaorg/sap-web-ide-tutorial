/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"amcalmeidaorg/sap-web-ide-tutorial/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});