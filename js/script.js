$(document).ready(function() {
	var porcentaje = 100;
	var index = 1;
	var total = 12;
	var maxSize = 100;
	var minSize = 30;
	var maxDelay = 7;
	var minDelay = 0;
	var maxDuration = 10;
	var minDuration = 5;
	$( ".bg-bubbles li" ).each(function( index ) {
		var size  = Math.floor((Math.random() * maxSize) + minSize);
		var delay = Math.floor((Math.random() * maxDelay) + minDelay);
		var duration = Math.floor((Math.random() * maxDuration) + minDuration);
  		$( this ).css("left", ((porcentaje/total) * index) +"%");
  		$( this ).css("width",  size+"px");
  		$( this ).css("height",  size+"px");
  		$( this ).css("animation-delay",  delay+"s");
  		$( this ).css("animation-duration",  duration+"s");

  		index++;
	});


});
