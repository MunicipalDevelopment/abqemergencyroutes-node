var http = require("http");



module.exports={

getAllEmergencyRoutes:function(){
url = "http://gisdmd.cabq.gov/dmdview/rest/services/public/SurveyMonuments/MapServer/0/query?where=1=1&outFields=*&outSR=4326&f=json";

// Code snippet from http://stackoverflow.com/questions/16148403/using-node-js-to-connect-to-a-rest-api Robert Mitchell
var request = http.get(url, function (response) {

    var buffer = "",
        data,
        route;

    response.on("data", function (chunk) {
        buffer += chunk;
    });

    response.on("end", function (err) {

        data = JSON.parse(buffer);
        console.log(data.features[0]);
        f=data.features;
        return f;
    });
});
},
}
