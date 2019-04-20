// Carousel
$('#myCarousel').carousel({
    interval: 2000,
    wrap: true
      })


// My sports feed api

// var apiKey = "ae1a5593-8260-45b1-a132-982ff4"
// $.ajax({
//  type: "GET",
//  url: "https://api.mysportsfeeds.com/v2.1/pull/nhl/2019-playoff/games.json",
//  dataType: 'json',
//  async: false,
//  headers: {
//    "Authorization": "Basic " + btoa(apiKey + ":" + MYSPORTSFEEDS)
//  },
//  data: '{ "comment" }',
//  success: function (){
//    alert('Thanks for your comment!');
//  }
// });

// function sportsOdds(){
  var oddsApiKey = "d38373eaef05ac04f5bc305caee2257c";
  $.ajax({
    type: "GET",
    url: "api.the-odds-api.com/v3/sports/?apiKey=" + oddsApiKey,
  }).then(function(repsonse){
    console.log(response);
  })
// }

// sportsOdds();

// Firebase
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBRVn-JUBU5itr9VYoxm2QIp_p7LIgaxco",
  authDomain: "betterodds-c8723.firebaseapp.com",
  databaseURL: "https://betterodds-c8723.firebaseio.com",
  projectId: "betterodds-c8723",
  storageBucket: "betterodds-c8723.appspot.com",
  messagingSenderId: "29456380019"
};
firebase.initializeApp(config);