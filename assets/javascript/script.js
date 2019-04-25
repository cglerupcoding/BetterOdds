var oddsData = [];
function sportsOdds() {
  var apiData =
    "https://api.the-odds-api.com/v3/odds?apiKey=d38373eaef05ac04f5bc305caee2257c&region=uk&sport=icehockey_nhl";
  $.ajax({
    url: apiData,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    //console.log(response);
    oddsData = response.data;
  });
}

sportsOdds();  //this would be better as an onload event for the window. (BVH)

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
var dataRef = firebase.database();

//events handlers

//login button click handler
$("#signUpSubmitBtn").on("click", function (event) {
  event.preventDefault();
  //TODO:  validate thoroughly
  //do the passwords match?
  //is the email field a valid address?
  //does the user already exist?

  var userEmail = $("#enterEmail").val().trim();
  var userPassword = $("#enterPassword").val().trim();
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
  .catch(function(error){
    console.log(error.message);
  });
});


function showSignupForm(event) {
  event.preventDefault();
  $("#modalSignupForm").show();
}

function hideSignupForm(event) {
  event.preventDefault();
  //then hide it
  $("#modalSignupForm").hide();
}

$("#showSignUpModal").on("click", showSignupForm);
$("#signUpCancelBtn").on("click", hideSignupForm);

var dataSet = [{
  "name": "Boston Bruins",
  "odds": "1.6",
  "score": "1"
},
{
  "name": "Toronto Maple Leafs",
  "odds": "0.4",
  "score": "2"
}
];

// 
// var data = {
// name = SHIT FROM THE API hRERE;
// odds = SHIT FROM THE API hRERE;
// score = SHIT FROM THE API hRERE;
//}

//dataSet = $.parseJSON(dataSet);

function populateOddsTable() {
  $.each(dataSet, function (i, item) {
    var $tr = $('<tr>').append(
      $('<td>').text(item.name),
      $('<td>').text(item.odds),
      $('<td>').text(item.score)
    );
    console.log($tr.wrap('<p>').html());
    $("#oddsTable > tbody").append($tr);
  });

}
populateOddsTable();
