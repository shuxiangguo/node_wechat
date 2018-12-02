'use strict'

var Koa = require('koa');
var sha1 = require('sha1');
var path = require('path');
var wechat = require('./wechat/g')
var util = require('./libs/util')
var wechat_file = path.join(__dirname, './config/wechat.txt');

var config = {
	wechat: {
		appID: 'wx3337e1d8d359db5c',
		appsecret: '7cbde8e0a700ba80ead4e2c82a83a809',
		token: 'shuxiangguohellonodejs',
		getAccessToken: function() {
			return util.readFileAsync(wechat_file);
		},
		saveAccessToken: function(data) {
			data = JSON.stringify(data)
			return util.writeFileAsync(wechat_file, data)
		}
	}
}

var app = new Koa();
app.use(wechat(config.wechat));

app.listen(1234);
console.log('listening: 1234')