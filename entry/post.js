require('../css/post.css');
var $ = require('lib/zepto');
var Widget = require('lib/widget');
var postWidget = require('widget/postWidget').postWidget;
var aawidget = require('widget/postWidget').aawidget;

postWidget.setEl([$('#a'), $('#b')]);
aawidget.setEl([$('#b')]);

Widget.initWidgets([aawidget, postWidget]);