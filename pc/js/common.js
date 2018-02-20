$(function(){
	// 채널1 팝업
		var chennel1Popup = new Popup('.btn_photo_del','.pop_wrap','.photo_del .btn_yes,.photo_del .btn_no');	

	// 채널2 - 3음성메일 녹음 시작
		recordSound.eventInit();

	// 채널2 - 4가족정보태깅
		tagBtn.eventInit();
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


// 채널2 - 3음성메일 녹음 시작
	recordSound = {
		$recordBtn: null,
		$recordChange: null,

		init: function(){
			this.$recordBtn = $('.record_start');
			this.$recordChange = $('.voice_wrap');
		},
		eventInit: function(){
			var objThis = this;
			this.init();

			this.$recordBtn.on('click',function(e){
				e.preventDefault();
				if(objThis.$recordChange.hasClass('recorded') == false){
					console.log(objThis.$recordChange.hasClass('recorded'))
					objThis.$recordChange.addClass('recorded');
				} else {
					objThis.$recordChange.removeClass('recorded');
				}
			});
		}
	}


// 채널2 - 4가족정보태깅
	tagBtn = {
		$infoChange: null,
		$taggingInfo: null,
		$taggingForm: null,

		init: function(){
			this.$infoChange = $('.info_change');
			this.$infoModify = $('.info_modify');
			this.$taggingInfo = $('.tagging_info');
			this.$taggingForm = $('.tagging_form');
		},
		formShow: function(){
			var objThis = this;

			this.$infoChange.on('click', function(){
				objThis.$taggingInfo.hide();
				objThis.$taggingForm.show();
			});
		},
		formHide: function(){
			var objThis = this;

			this.$infoModify.on('click', function(){
				objThis.$taggingForm.hide();
				objThis.$taggingInfo.show();
			});
		},
		eventInit: function(){
			this.init();
			this.formShow();
			this.formHide();
		}
	}

