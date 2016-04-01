module.exports = {
	initials: initials
}

function initials(userName) {
	var userNames = userName.split(' ');

	var initials = '';

	for (var i = 0; i < userNames.length; i++) {
		initials += userNames[i][0];
	}

	return initials;
}