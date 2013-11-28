// ==UserScript==
// @name           NZVAA
// @description    New Zealand Working Holiday Visa Apply Assistant
// @version        1.0
// @author         ricky.agaric
// @namespace      https://github.com/RickyAgaric/NZVAA
// @include        https://www.immigration.govt.nz/*
// ==/UserScript==

function nzvaaQuery(callback, safe) {
	console.log(typeof(jQuery));
	if (typeof (jQuery) == "undefined") {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";

		if (safe) {
			var cb = document.createElement("script");
			cb.type = "text/javascript";
			cb.textContent = "jQuery.noConflict();(" + callback.toString()
					+ ")(jQuery, window);";
			script.addEventListener('load', function() {
				document.head.appendChild(cb);
			});
		} else {
			var dollar = undefined;
			if (typeof ($) != "undefined")
				dollar = $;
			script.addEventListener('load', function() {
				jQuery.noConflict();
				$ = dollar;
				callback(jQuery, window);
			});
		}
		document.head.appendChild(script);
	} else {
		console.log("jQuery has loaded");
	}
};

function worker() {
	// $(document).ready(function() {
	// alert( "welcome" );
	// });
	console.log(typeof(jQuery));
	var applyBu = document
			.getElementById('ctl00_ContentPlaceHolder1_applyNowButton');
	if (applyBu) {
		applyBu.click();
	} else {
		console.log("Don't have candidate");
	}
	// setTimeout(reloadApplyPage, 500);
};

nzvaaQuery(worker, true);