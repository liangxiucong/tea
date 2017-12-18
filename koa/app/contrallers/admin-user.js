'use strict'

var mongoose =  require('mongoose')
var User = require('./../models/admin-user');
var methods = require('./../methods/admin-user');
let C = require('./../../common/index')

// 注册新用户
exports.signup = async (ctx, next)=> {
	let body = ctx.request.body;
	if (body.password === body.body.oldPassword) {
		let user = await User.findOne({user}).exec();
		if (!user) {
			user = new User({
				user: body.user,
				password: body.password
			})
			user = await user.save();
			ctx.body = C.Res(C.Flag.Success)
		} else {
			// 无该用户
			ctx.body = C.Res(C.Flag.None)
		}
	} else {
		ctx.body = C.Res(C.Flag.Error)
	}
}

// 更新用户密码
exports.update = async (ctx, next)=> {
	let body = ctx.request.body;
	if (body.password === body.oldPassword) {
		var data = await methods.findByUser(body.user);
		if (!isEmpty(data)) {
			User.update({user: body.user}, {'$set': {password: body.oldPassword}}, (err, doc)=> {
				if (!err && doc) {
					ctx.body = C.Res(C.Flag.Success)
				} else {
					ctx.body = C.Res(C.Flag.Error)
				}
			})
		} else {
			ctx.body = C.Res(C.Flag.Error)
		}
	} else {
		ctx.body = C.Res(C.Flag.Error)
	}
}

// 账号登录
exports.login = async (ctx, next) => {
	let body = ctx.request.body;
	var data = await methods.findByUser(body.user);
	if (!isEmpty(data)) {
		if (data.password === body.password) {
			ctx.body = C.Res(C.Flag.Success);
		} else {
			ctx.body = C.Res(C.Flag.Unlike);
		}
	} else {
		ctx.body = C.Res(C.Flag.Error);
	}
}