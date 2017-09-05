var Blood = require('../models/blood');
var express = require('express');
var router = express.Router();
var _ = require('lodash');

router.get('/ffff', function (req, res) {
		res.status(200).json({message :'Thank you!'});
});
router.post('/save_address', function (req, res) {
		var newBlood            = new Blood();
  		var postData  = req.body.groupObj;
  		if (postData.fname&&postData.lname&&postData.emailadd
  			&&postData.mobile&&postData.bgroup&&postData.lat&&postData.long) {
  			newBlood.first_name    = postData.fname;
			newBlood.last_name    = postData.lname;
			newBlood.email    = postData.emailadd;
			newBlood.mobile    = postData.mobile;
			newBlood.latitude    = postData.lat;
			newBlood.longtitude    = postData.long;
			newBlood.blood_group    = postData.bgroup;
			newBlood.save(function(err) {
					if (err)
						throw err;
				res.status(200).json({message :'Thank you!'});
			});
  		}
		
});


router.get('/get_all_locations', function(req, res) {
  Blood.find({}, function(err, record) {
    var locations = {};

    record.forEach(function(user) {
      locations[user._id] = user;
    });
    res.send(locations);  
  });
});

module.exports = router;