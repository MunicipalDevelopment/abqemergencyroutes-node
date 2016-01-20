# ABQEmergencyRoutes
This module grabs all the emergency routes in Albuquerque.

### Usage
```node
var r = require('abqemergencyroutes');

function fn(d){

  //have an array of JSON features. d[0].
  //d[0]["attributes"]["MONUMENTSTATUS"]
  //d[0]["geometry"]["x"]
  console.log(d[0]);

}
r.getAllEmergencyRoutes(fn);
```
The function getAll... returns an array of features.
