//ドキュメント読み込み完了時の処理
$(window).on('load', function() {
	console.log('loadイベントが発生しました');
});

//画面をスクロールしたときの処理
$(window).on('scroll', function() {
	console.log('scrollイベントが発生しました');
});
