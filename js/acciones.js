//JavaScript
	var audio ;
	
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		
	
		audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('mario','audio/mario.mp3',function(msg){},function(msg){alert ('error: '+msg);});
		
		
	$("#beep").bind("tap",function(e){
		navigator.notification.beep(3);
	});//click beep
	
	$("#vibrar").bind("tap",function(e){
		navigator.notification.vibrate(1000);
	});//click beep
	
	$("#play").bind("tap",function(e){
		audio.play('mario');
	});//click beep
	
	});//ready
	});//ready