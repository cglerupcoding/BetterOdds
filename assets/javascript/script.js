// Carousel
// $('#myCarousel').carousel({
//     interval: 2000,
//     wrap: true
//       })


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


//apikey = d38373eaef05ac04f5bc305caee2257c



var oddsData = [];
function sportsOdds(){
// >>>>>>> 796e849552861a2de2a4e1617d9b1a6c4de96e9b
  var apiData =
  "https://api.the-odds-api.com/v3/odds?apiKey=d38373eaef05ac04f5bc305caee2257c&region=uk&sport=icehockey_nhl";
$.ajax({
  url: apiData,
  method: "GET"
}).then(function(response) {

  console.log(response);



  //console.log(response);
  oddsData = response.data;
  console.log(oddsData);
// 796e849552861a2de2a4e1617d9b1a6c4de96e9b
});
}

sportsOdds();




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