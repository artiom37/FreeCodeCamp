var app = angular.module('TwitchApp',[]);

app.controller('twitchCtrl', function($scope,$http) {
  var sc = $scope;
  sc.arrResults = [];
  sc.sortedArrRez =[];
  var arrUsers = ["ESL_SC2", "OgamingSC2", "medrybw", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","comster404"];
  
  sc.title = {
    heading1: "TwitchTV App: STREAMERS"
  }
 sc.defaultLOGO = "https://s3-us-west-2.amazonaws.com/web-design-ext-production/p/Twitch_474x356.png";
  
  var streamURL="https://wind-bow.glitch.me/twitch-api/streams/";
  var channelsURL="https://wind-bow.glitch.me/twitch-api/channels/";
  var usersURL="https://wind-bow.glitch.me/twitch-api/users/";
  
  
  sc.clickBtnALL = function(){
    sc.arrResults.length = 0; 
    sc.sortedArrRez.length =0;
    sc.flagON=true;
    sc.flagOFF=true;
    sc.flagALL=false;
    
    angular.forEach(arrUsers,function(users){
      var sURL = streamURL+users;
      var cURL = channelsURL + users;
      var uURL = usersURL + users;
      
      $http.get(cURL).success(function(data){           
        $http.get(sURL).success(function(streamData){

          streamData.stream==null ? 
            (data.status == '404' ? data.streamCheck = data.error : data.streamCheck ='Offline')
          : data.streamCheck ='Online'          
        });//end of stream HTTP request
        
        if(data.status =='404') 
        {
          data.display_name = data.message;
          data.logo = sc.defaultLOGO;
        }
        else if(data.logo == null) 
        { 
          data.display_name = data.display_name; 
          data.logo = sc.defaultLOGO;
        }
        else {data.display_name = data.display_name; }
        
        sc.arrResults.push(data);  
       
      });//end of channel HTTP request      
    });//end of Angular forEach loop   
     //sc.sortedArrRez = _.sortBy(sc.arrResults, object.streamCheck)
  }//end of clickBtnALL
   
  sc.clickBtnON = function(){
    sc.arrResults.length = 0;     
    sc.flagALL=true;
    sc.flagON=false;
    sc.flagOFF=true;
    angular.forEach(arrUsers,function(users){
      var sURL = streamURL+users;
      var cURL = channelsURL + users;      
      
      $http.get(cURL).success(function(data){           
        $http.get(sURL).success(function(streamData){              
          
          streamData.stream==null ? 
            (data.status == '404' ? data.streamCheck = data.error : data.streamCheck ='Offline')
          : data.streamCheck ='Online'          
        });//end of stream HTTP request
        
        if(data.status =='404') 
        {
          data.display_name = data.message;
          data.logo = sc.defaultLOGO;
        }
        else if(data.logo == null) 
        { 
          data.display_name = data.display_name; 
          data.logo = sc.defaultLOGO;
        }
        else {data.display_name = data.display_name; } 
        
        sc.arrResults.push(data);        
      });//end of channel HTTP request      
    });//end of Angular forEach loop 
  }//end of clickBtnON
 
  
    sc.clickBtnOFF = function(){
    sc.arrResults.length = 0;    
    sc.flagALL=true;
    sc.flagON=true;
    sc.flagOFF=false; 
    angular.forEach(arrUsers,function(users) {
      var sURL = streamURL+users;
      var cURL = channelsURL + users;      
      
      $http.get(cURL).success(function(data){           
        $http.get(sURL).success(function(streamData){              
          
         streamData.stream==null ? 
            (data.status == '404' ? data.streamCheck = data.error : data.streamCheck ='Offline')
          : data.streamCheck ='Online'          
        });//end of stream HTTP request
        
        if(data.status =='404') 
        {
          data.display_name = data.message;
          data.logo = sc.defaultLOGO;
        }
        else if(data.logo == null) 
        { 
          data.display_name = data.display_name; 
          data.logo = sc.defaultLOGO;
        }
        else {data.display_name = data.display_name; }   
        
        sc.arrResults.push(data);        
      });//end of channel HTTP request      
    });//end of Angular forEach loop
  }//end of clickBtnOFF        
  
});// end of controller