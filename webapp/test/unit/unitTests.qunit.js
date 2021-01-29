/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"amit/Sample1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});