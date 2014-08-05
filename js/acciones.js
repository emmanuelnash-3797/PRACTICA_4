//JavaScript
	
$(document).ready(function(e){
	
	$("#beep").click(function(e){
		navigator.notification.beep(3);
	});//click beep
	
	$("#vibrar").click(function(e){
		navigator.notification.vibrate(1000);
	});//click beep
	
});//ready