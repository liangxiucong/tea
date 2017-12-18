
'use strict'

let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
	user: String,
	password: String,
	token: String,
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
})

UserSchema.pre('save', (next)=> {
	if (this.isNew) {
		this.meta.createAt = this.meta.updateAt = Date.now();
	} else {
		this.meta.updateAt = Date.now();
	}
})


module.exports = mongoose.model('adminUser', UserSchema);;