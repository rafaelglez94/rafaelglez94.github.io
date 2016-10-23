$(document).ready(function() {
	$('.lines').html(function(index,value) {
		for (var i = 0; i < 40; i++) {
			$('<div class="mdl-grid"><div class="mdl-cell mdl-cell--12-col">'+(i+1)+'</div></div>').appendTo('.lines')
		}
	});
	$(".etq").html(function( index, value ) {
		return '<span class="etq-i">'+$(this).data('id')+'</span>'+value+'<span class="etq-r">'+$(this).data('id')+'</span>';
	});
	$('.etq-i').html(function( index, value ) {
		return '&lt;<span class="etq-c">'+value+'</span>&gt;' ;
	});
	$('.etq-r').html(function( index, value ) {
		return '&lt;/<span class="etq-c">'+value+'</span>&gt;' ;
	});
});
