$(document).ready(function() {
  var lat;
  var lon;
  getWeather();  
  
  function getWeather(){
    var weatherAPI;
    //WeatherAPI:key: c6564d8ae655659c
    //http://api.wunderground.com/api/c6564d8ae655659c/geolookup/q/autoip.json
    if (navigator.geolocation) 
    {      
      navigator.geolocation.getCurrentPosition(function(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;      
       //http://api.wunderground.com/api/c6564d8ae655659c/geolookup/conditions/q/lat,lon.json
        var jsonStr="https://api.wunderground.com/api/c6564d8ae655659c/geolookup/conditions/q/"+lat+","+lon+".json";
        //console.log(jsonStr);
        $.getJSON(jsonStr,function(json) {          
          var htmlIcon = "<img class='img-responsive center-block' src='"+json.current_observation.icon_url+"'>";
          var htmlTempF = Math.round(json.current_observation.temp_f);
          var htmlTempC = Math.round(json.current_observation.temp_c);
          var htmlLoc = json.current_observation.display_location.full;
          var htmlDesc = json.current_observation.weather;
          var keys=Object.keys(json);
          console.log(keys);
          console.log(json.current_observation.icon_url);                  
                      
          //default Temp in F            
          $(".wIcon").html(htmlIcon);
          $(".temp").html(htmlTempF);
          $("#unitF").removeClass("hide");          
          $(".location").html(htmlLoc);
          $(".wDesc").html(htmlDesc);
          
          //on click of F switch to show temp in C
          $(".tUnitF").on("click", function(){
            $(".temp").html(htmlTempC);
            $("#unitF").addClass("hide");
            $("#unitC").removeClass("hide");
          });
          //on click of C switch to show temp in F
          $(".tUnitC").on("click", function(){
            $(".temp").html(htmlTempF);
            $("#unitC").addClass("hide");
            $("#unitF").removeClass("hide");
          });
        });//end of getJSON
       });//end of Navigator function
      
    } //end of IF Navigator call       
     
   
  }; //end of getWeather()
});//END OF DOCUMENT