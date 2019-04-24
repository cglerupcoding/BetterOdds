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
// function sportsOdds(){
var team1Odds;
var team2Odds;

  var apiData =
  "https://api.the-odds-api.com/v3/odds?apiKey=d38373eaef05ac04f5bc305caee2257c&region=uk&sport=icehockey_nhl";
$.ajax({
  url: apiData,
  method: "GET"
}).then(function(response) {
  console.log(response);
  console.log(response.data[0].sites[3].odds.h2h[0]);
  console.log(response.data[0].sites[3].odds.h2h[1]);
  team1Odds = response.data[0].sites[3].odds.h2h[0];
  team2Odds = response.data[0].sites[3].odds.h2h[1];

  return team1Odds, team2Odds;
});
// }

// sportsOdds();




