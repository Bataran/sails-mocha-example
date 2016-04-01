var UserService = require('../services/UserService');

module.exports = {
	userInitials: userInitials
}

function userInitials(req, res) {
	var userId = req.param('id');

	User.findOne({
        id: userId
    })
	.then(function(user) {
			return res.json(UserService.initials(user.name));
		});
}