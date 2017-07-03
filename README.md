# Time Units
A small object containing the number of milliseconds in a given time unit. Using, `require('timeunits')` will return this object with the timeunits being accesible via object notation:

```
var timeunits = require('timeunits');

timeunits.millisecond   //-> 1
timeunits.second        //-> 1000
timeunits.minute        //-> 60000
timeunits.hour          //-> 3600000
timeunits.day           //-> 86400000
timeunits.week          //-> 604800000
timeunits.month         //-> 2419200000
timeunits.year          //-> 31449600000

timeunits.unix.millisecond   //-> 0.001
timeunits.unix.second        //-> 1
timeunits.unix.minute        //-> 60
timeunits.unix.hour          //-> 3600
timeunits.unix.day           //-> 86400
timeunits.unix.week          //-> 604800
timeunits.unix.month         //-> 2419200
timeunits.unix.year          //-> 31449600
```


## License
MIT © [Daniel Kalen](https://github.com/danielkalen)
