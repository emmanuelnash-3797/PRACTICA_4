//JavaScript
	var audio ;
	
$(document).ready(function(e){
	
	if(window.plugin && window.plugins.lowlatencyAudio)
	
	{
		audio=window.plugins.lowlatencyAudio;
		audio.preloadFX('mario','audio/mario.mp3',function(msg){},function(msg){alert ('error: '+msg);});
		}//Precargar el PLAY
		
		
	$("#beep").bind("tap")(function(e){
		navigator.notification.beep(3);
	});//click beep
	
	$("#vibrar").bind("tap")(function(e){
		navigator.notification.vibrate(1000);
	});//click beep
	
	$("#play").bind("tap")(function(e){
		audio.play('mario');
	});//click beep
	
});//ready