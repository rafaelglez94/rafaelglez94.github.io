$(document).ready(function() {
	$('.mdl-navigation__link').click(function(){
		$('.mdl-layout__drawer').toggleClass('is-visible');
		$('.mdl-layout__obfuscator').removeClass('is-visible');

	});
	$('.lines').html(function(index,value) {
		for (var i = 0; i < 42; i++) {
			$('<div class="mdl-grid"><div class="mdl-cell mdl-cell--12-col">'+(i+1)+'</div></div>').appendTo('.lines')
		}
	});
	$(".etq").html(function( index, value ) {
		return '<span class="etq-i">'+$(this).data('id')+'</span><span class="etq-cnt">'+value+'</span><span class="etq-r">'+$(this).data('id')+'</span>';
	});
	$('.etq-i').html(function( index, value ) {
		return '&lt;<span class="etq-c">'+value+'</span>&gt;' ;
	});
	$('.etq-r').html(function( index, value ) {
		return '&lt;/<span class="etq-c">'+value+'</span>&gt;' ;
	});
});

