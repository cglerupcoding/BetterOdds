// Carousel
$('#myCarousel').carousel({
    interval: 2000
    wrap: true
      })


// My sports feed api

var apiKey = "ae1a5593-8260-45b1-a132-982ff4"
$.ajax
({
 type: "GET",
 url: "https://api.mysportsfeeds.com/v2.1/pull/nhl/2019-playoff/games.json",
 dataType: 'json',
 async: false,
 headers: {
   "Authorization": "Basic " + btoa(apiKey + ":" + MYSPORTSFEEDS)
 },
 data: '{ "comment" }',
 success: function (){
   alert('Thanks for your comment!');
 }
});