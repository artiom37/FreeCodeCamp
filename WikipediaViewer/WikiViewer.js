var app = angular.module('WikiApp', []);

app.controller('wikiCtrl', function($scope, $http){
  var sc = $scope;
  sc.arrSearchResults = [];
  
  sc.title ={
    heading1: "Free Code Camp",
    heading2: "Wikipedia Viewer"
  };
  
  //Random Wiki Article
  sc.randomSearchIMG="http://downloadicons.net/sites/default/files/wiki-logo-icon-19241.png"
  sc.randomSearchLink = "https://en.wikipedia.org/wiki/Special:Random"
  
  sc.searchIMG = "http://downloadicons.net/sites/default/files/white-search-icon-2-29449.png"
  
  // get search results on Enter Key pressed
  sc.EnterKey = function($event){
    var keyCode = $event.which || $event.keyCode;
    if (keyCode === 13) {
      sc.arrSearchResults.length=0;
      var wikiAPI="https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&format=json&search="+sc.searchVal;
      $http.get(wikiAPI).success(function(data){
        //console.log(data);
        sc.arrSearchResults.push(data[1]); //headers
        sc.arrSearchResults.push(data[2]); //descriptions
        sc.arrSearchResults.push(data[3]); //links
      });//end of HTTP request
    }//end of IF
  }//end of EnterKey
  
  // get search results on Search Button Click pressed
  sc.ClickSearch = function(){
      sc.arrSearchResults.length=0;
      var wikiAPI="https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&format=json&search="+sc.searchVal;
      $http.get(wikiAPI).success(function(data){
        //console.log(data);
        sc.arrSearchResults.push(data[1]); //headers
        sc.arrSearchResults.push(data[2]); //descriptions
        sc.arrSearchResults.push(data[3]); //links
      });//end of HTTP request    
  }//end of ClickSearch
  
});//end of controller