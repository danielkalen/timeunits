(function(){
	var timeUnits = {
		'millisecond': 1,
		'second': 1000,
		'minute': 60000,
		'hour': 3600000,
		'day': 24 * 3600000,
		'week': 7 * 24 * 3600000,
		'month': 28 * 24 * 3600000,
		'year': 364 * 24 * 3600000
	};

	if (typeof module === 'object') {
		module.exports = timeUnits;
	} else if (typeof window === 'object') {
		window.timeUnits = timeUnits;
	}

	return timeUnits;
})();