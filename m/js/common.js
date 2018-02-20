$(function(){
	// 사진업로드 팝업
		var photoUp = new Popup('.btn_upload','.pop_wrap','.btn_conf');
});


// 팝업
// new Popup('클릭요소','팝업','닫기요소');
	function Popup(selector, pop, close){
		this.$selector = null;
		this.$pop = null;
		this.$close = null;

		this._init(selector, pop, close);
		this._initEvent(selector, pop, close);
	}

	Popup.prototype._init = function(selector, pop, close){
		this.$selector = $(selector);
		this.$pop = $(pop);
		this.$close = $(close);
	}
	Popup.prototype._popOpen = function(){
		var objThis = this;

		this.$selector.on('click', function(){
				objThis.$pop.show();				
		});
	}
	Popup.prototype._popClose = function(){
		var objThis = this;

		this.$close.on('click', function(){
			objThis.$pop.hide();
		});
	}
	Popup.prototype._initEvent = function(){
		this._popOpen(selector, pop);
		this._popClose(pop, close);
	}