$(function () {
	$('#change-color').on({
		'click': function () {
			// 文字を赤
			$('#target').css('color', 'red');
		},
	});

	$('#change-text').on({
		'click': function () {
			// 文字を赤
			$('#target').css('color', 'red');
			// テキストを「Hello!」
			$('#target').text('Hello!');
		},
	});

	$('#fade-out').on({
		'click': function () {
			// テキストをフェードアウト
			$('#target').fadeOut();
		},
	});

	$('#fade-in').on({
		'click': function () {
			// テキストをフェードイン
			$('#target').fadeIn();
		},
	});
});
