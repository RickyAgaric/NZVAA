// ==UserScript==
// @name           NZVAA
// @description    New Zealand Working Holiday Visa Apply Assistant
// @version        1.0
// @author         ricky.agaric
// @namespace      https://github.com/RickyAgaric/NZVAA
// @include        https://www.immigration.govt.nz/*
// ==/UserScript==

function extQuery() {
	console.log(typeof(jQuery));
	if (typeof (jQuery) == "undefined") {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "https://raw.github.com/RickyAgaric/NZVAA/master/nzvaa.user.js";
		document.head.appendChild(script);
	} else {
		console.log("extQuery has loaded");
	}
};

extQuery();