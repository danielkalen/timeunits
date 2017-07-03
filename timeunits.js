(function(){
	var timeunits = {
		'millisecond': 1,
		'second': 1000,
		'minute': 60000,
		'hour': 3600000,
		'day': 24 * 3600000,
		'week': 7 * 24 * 3600000,
		'month': 28 * 24 * 3600000,
		'year': 364 * 24 * 3600000
	};
	var unix = {};
	Object.keys(timeunits).forEach(function(unit){
		unix[unit] = timeunits[unit] / 1000;
	})
	timeunits.unix = unix;



	if (typeof module === 'object') {
		module.exports = timeunits;
	} else if (typeof window === 'object') {
		window.timeunits = timeunits;
	}

	return timeunits;
})();