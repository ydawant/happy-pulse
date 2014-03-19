var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  name: String,
  pulse: [{type: Number, default: 0} ],
  created_at: {type: Date, default: Date.now },
  updated_at: {type: Date, default: Date.now }
})

var Users = mongoose.model('Users', usersSchema);
