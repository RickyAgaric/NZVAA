/**
 * 
 */

function notify(str, timeout, skipAlert) {
	if( window.webkitNotifications ) {
		console.log("Notification permission is " + window.webkitNotifications.checkPermission());
		
		if(window.webkitNotifications.checkPermission() != 0) {
			window.webkitNotifications.requestPermission(function() {
				var notification = webkitNotifications.createNotification(
					"http://www.12306.cn/mormhweb/images/favicon.ico",  // icon url - can be relative
					'Book',  // notification title
					str
				);
				notification.show();
				if ( timeout ) {
					setTimeout(function() {
						notification.cancel();
					}, timeout);
				}
				return true;
			});
		}
	} else {
		if( !skipAlert ) {
			alert( str );
		}
		return false;
	}
}

$(document).ready(function(){
  $("button").click(function(){
	notify("Hello", 1000, false);
  });
});


