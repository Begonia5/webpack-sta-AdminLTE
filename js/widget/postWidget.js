var Widget = require('lib/widget');
exports.postWidget = Widget.define({
	events : {
		'click [data-role="w"]' : function(){
			alert(1111);
		}
	},
	init : function(config) {
		console.log(5555555555);
		console.log(config);
	}
});
exports.aawidget = Widget.define({
	events : {
		'click [data-role="a"]' : function(){
			alert(2131231231);
		},
		'click [data-role="w"]' : function(){
			window.alert(2);
		}
	},
	init : function(config) {
		console.log(5555555555);
		console.log(config);
	}
});