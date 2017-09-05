var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
    first_name              : { type: String, required: true},
    last_name              : { type: String, required: true},
    email             : { type: String, required: true},
    mobile             : { type: String, required: true},
    blood_group             : { type: String, required: true},
    latitude             : { type: String, required: true},
	longtitude             : { type: String, required: true},
	createdDate       : Date
});

module.exports = mongoose.model('User', UserSchema);