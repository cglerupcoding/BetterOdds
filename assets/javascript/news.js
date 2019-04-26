// var newsData = [];
// function sportsnews() {
  var newsData = "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=ahXm1q7WRd2XCH90uNuGAYD0j5tBiK8O";
  $.ajax({
    url: newsData,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    newsData = response;
      $.each(newsData.data, function (i, item) {
        var $tr = $('<tr>').append(
          $('#newsOne').text(newsData.data[i].teams),
          $('#newsTwo').text(newsData.data[i].sites[2].news.h2h),
          $('#newsThree').text(newsData.data[i].sites[2].news.h2h)
        );
        console.log($tr.wrap('<p>').html());
        $("#newsTable > tbody").append($tr);
    });
  });


