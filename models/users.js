var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
	username: String,
	email: String,
	date: {type: Date, default: Date.now }
})

var Users = mongoose.model('Users', usersSchema);
