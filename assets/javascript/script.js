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
  var apiData =
  "https://api.the-odds-api.com/v3/odds?apiKey=d38373eaef05ac04f5bc305caee2257c&region=uk&sport=icehockey_nhl";
$.ajax({
  url: apiData,
  method: "GET"
}).then(function(response) {
  //console.log(response);
  oddsData = response.data;
  console.log(oddsData);
});
}

sportsOdds();  //this would be better as an onload event for the window. (BVH)

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

//events handlers

//login button click handler
$("#signupBtn").on("click", function(event){
  event.preventDefault();
  //TODO:  validate thoroughly

  //TODO:  get the form data assuming it's all good

  //TODO:  Store it in firebase
});


function showSignupForm(event){
  event.preventDefault();
  $("#modalSignupForm").show();
}

function hideSignupForm(event){
  event.preventDefault();
  //clear out the form
  //$("#signUpForm").find("input[type=text], textarea").val("");
  //then hide it
  $("#modalSignupForm").hide();
}

$("#showSignUpModal").on("click", showSignupForm);
$("#signUpCancelBtn").on("click", hideSignupForm);