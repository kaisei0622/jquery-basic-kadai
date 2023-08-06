$(function() {
	// id属性がaddの要素がクリックされたら
	$('#target').on('click', function(){
		// id属性がtargetの要素にclass属性'heading'を追加
		$('#target').addClass('heading');
	});
});
