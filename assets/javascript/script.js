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

//utility functions
function isValidEmailAddress(emailAddress) {
  var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  return pattern.test(emailAddress);
}

//events handlers

//login button click handler
$("#signUpSubmitBtn").on("click", function (event) {
  event.preventDefault();
  //TODO:  validate thoroughly
  //do the passwords match?
  //is the email field a valid address?
  //does the user already exist?
  var valid = true;
  var userEmail = $("#enterEmail").val().trim();
  var userPassword = $("#enterPassword").val().trim();
  var userPasswordRepeat = $("#enterPasswordRepeat").val().trim();

  if (userPassword !== userPasswordRepeat) {
    $("#signupFailMessage").text("The two passwords must match.  They don't.");
    valid = false;
  }

  if (userPassword.length < 6) {
    $("#signupFailMessage").text("The password needs to be at least 6 characters long.");
    valid = false;
  }

  if (!isValidEmailAddress(userEmail)) {
    $("#signupFailMessage").text("The email address format is not valid.");
    valid = false;
  }

  // if everything is valid, send it over
  if (valid) {
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
      .catch(function (error) {
        console.log(error.message);
        valid = false;
        $("#signupFailMessage").text(error.message);
      });
  }

  //firebase can still reject so it too triggers valid = false and sets the message.
  //nothing left but to show the appropriate message
  if(valid){
    $("#signupSuccessMessage").show();
    $("#signupFailMessage").hide();
  } else {
    $("#signupSuccessMessage").hide();
    $("#signupFailMessage").show();
  }

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

$("#signupSuccessMessage").hide();
$("#signupFailMessage").hide();
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
