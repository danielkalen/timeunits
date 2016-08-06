# Time Units
A small object containing the number of milliseconds in a given time unit. Using, `require('timeunits')` will return this object with the timeunits being accesible via object notation:
```
var timeUnits = require('timeunits');

timeUnits.millisecond   //-> 1
timeUnits.second        //-> 1000
timeUnits.minute        //-> 60000
timeUnits.hour          //-> 3600000
timeUnits.day           //-> 86400000
timeUnits.week          //-> 604800000
timeUnits.month         //-> 2419200000
timeUnits.year          //-> 31449600000
```