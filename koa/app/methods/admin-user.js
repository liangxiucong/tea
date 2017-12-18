'use strict'

let mongoose = require('mongoose');
var User = require('./../models/admin-user');

// 查询用户
exports.findByUser = async ({user}) => {
	var query = User.find({user})
	var res = null
	await query.exec(function(err, doc) {
		if(err) {
			res = {}
		}else {
			res = doc
		}
	})
	return res;
}

// 添加用户
exports.addUser = async({user}) => {
	user = await user.save();
	return user
}

/**
 * 删除用户
 */
exports.deleteUser = async ({user}) => {
	var flag = false;
	await User.remove({user}, function(err) {
		if(err) {
			flag = false
			// return false
		}else{
			flag = true
		}
		
	})
	return flag
}