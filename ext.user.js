// ==UserScript==
// @name           NZVAA
// @description    New Zealand Working Holiday Visa Apply Assistant
// @version        1.0
// @author         ricky.agaric
// @namespace      https://github.com/RickyAgaric/NZVAA
// @include        https://www.immigration.govt.nz/*
// ==/UserScript==

function extQuery() {
	console.log("type of nzvaaQuery is " + typeof(nzvaaQuery));
	if (typeof (nzvaaQuery) == "undefined") {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "https://raw.github.com/RickyAgaric/NZVAA/master/nzvaa.user.js";
		document.head.appendChild(script);
	} else {
		console.log("nzvaaQuery has defined");
	}
};

extQuery();