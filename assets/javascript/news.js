// var newsData = [];
// function sportsnews() {
  var newsData = "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=ahXm1q7WRd2XCH90uNuGAYD0j5tBiK8O";
  $.ajax({
    url: newsData,
    method: "GET"
  }).then(function (response) {
    // console.log(response);
    newsData = response;
      // $.for(newsData.results, function (i, item) {
        $('#newsOne').append
      for (i  =0; i < 1; i++) {
        console.log(response);


         // Creating and storing a div tag
         var container = $("<div>");
        var h1 = $("<h>").text(JSON.stringify(newsData.results[i].title));
     

          // $('#newsOne').text(JSON.stringify(newsData.results[i]));
          // $('#newsTwo').text(newsData.data[i].sites[2].news.h2h),
          // $('#newsThree').text(newsData.data[i].sites[2].news.h2h)
                
         // Appending the paragraph and image tag to the animalDiv
         container.append(h1);
        };
        // // console.log($tr.wrap('<p>').html());
        $("#newsOne").append(container);
    });
  // });


