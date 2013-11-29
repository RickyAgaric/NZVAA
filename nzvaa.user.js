// ==UserScript==
// @name           NZVAA
// @description    New Zealand Working Holiday Visa Apply Assistant
// @version        1.0
// @author         ricky.agaric
// @namespace      https://github.com/RickyAgaric/NZVAA
// @include        https://www.immigration.govt.nz/*
// ==/UserScript==

function nzvaaQuery(callback, safe) {
	console.log("type of jquery is " + typeof (jQuery));
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
		console.log("jQuery has defined");
	}
};

function notify(str, timeout, skipAlert) {
	if (window.webkitNotifications
			&& window.webkitNotifications.checkPermission() == 0) {
		var notification = webkitNotifications.createNotification(
				"http://www.immigration.govt.nz/images/blank.gif", // icon url - can be relative
				'book ticket', // notification title
				str);
		notification.show();
		if (timeout) {
			setTimeout(function() {
				notification.cancel();
			}, timeout);
		}
		return true;
	} else {
		if (!skipAlert) {
			alert(str);
		}
		return false;
	}
}

function route(match, fn) {
	if (window.location.href.indexOf(match) != -1) {
		fn();
	}
	;
}

function queryQuota() {
	location.reload();
	var applyBu = document.getElementById('ctl00_ContentPlaceHolder1_applyNowButton');
	if(applyBu) {
		applyBu.click();
		return;
	} else {
		console.log("Don't have candidate");
		setTimeout(queryQuota, 5000);
	}
}

function applyQuota() {
	var timer = null;
}

function worker() {
	console.log(typeof (jQuery));
//	https://www.immigration.govt.nz/WORKINGHOLIDAY/Application/Create.aspx?CountryId=46
	route("Create.aspx?CountryId=46", queryQuota);
};

nzvaaQuery(worker, true);