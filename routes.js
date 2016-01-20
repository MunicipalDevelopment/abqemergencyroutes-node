var http = require("http");

module.exports={

getAllEmergencyRoutes:function(callback){

  var buffer = "",
      data,
      url = "http://gisdmd.cabq.gov/dmdview/rest/services/public/SurveyMonuments/MapServer/0/query?where=1=1&outFields=*&outSR=4326&f=json",
      route;


return http.get(url,function (response) {

    response.on("data", function (chunk) {
        buffer += chunk;
    });

    response.on("end", function () {

        data = JSON.parse(buffer);
        callback(data.features
      )
    });
});



},

}
