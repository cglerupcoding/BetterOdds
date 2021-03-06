// var newsData = [];==============================================================
// function sportsnews() {====================================================
  var newsData = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M&q=nhl&begin_date=20190101";
  $.ajax({
    url: newsData,
    method: "GET"
  }).then(function (response) {
    // console.log(response);============================================================
   NYTData = response;
      // $.for(newsData.results, function (i, item) { ===========================================
       
      for (i  =0; i < 1; i++) {
        console.log(response);


         // Creating and storing a div tag
         for (var i = 0; i < 10; i++) {
          // Get specific article info for current index
          var article = NYTData.response.docs[i];
      
          // Increase the articleCount (track article # - starting at 1)
          var articleCount = i + 1;
      
          // Create the  list group to contain the articles and add the article content for each
          var $articleList = $("<ul>");
          $articleList.addClass("list-group");
      
          // Add the newly created element to the DOM
          $("#article-section").append($articleList);
      
          // If the article has a headline, log and append to $articleList
          var headline = article.headline;
          var $articleListItem = $("<li class='list-group-item articleHeadline'>");
      
          if (headline && headline.main) {
            console.log(headline.main);
            $articleListItem.append(
              "<span class='label label-primary'>" +
                articleCount +
                "</span>" +
                "<strong> " +
                headline.main +
                "</strong>"
            );
          }
      
          // If the article has a byline, log and append to $articleList
          var byline = article.byline;
      
          if (byline && byline.original) {
            console.log(byline.original);
            $articleListItem.append("<h5>" + byline.original + "</h5>");
          }
      
          // Log section, and append to document if exists
          var section = article.section_name;
          console.log(article.section_name);
          if (section) {
            $articleListItem.append("<h5>Section: " + section + "</h5>");
          }
      
          // Log published date, and append to document if exists
          var pubDate = article.pub_date;
          console.log(article.pub_date);
          if (pubDate) {
            $articleListItem.append("<h5>" + article.pub_date + "</h5>");
          }
      
          // Append and log url
          $articleListItem.append("<a href='" + article.web_url + "'>" + article.web_url + "</a>");
          console.log(article.web_url);
      
          // Append the article
          $articleList.append($articleListItem);
        }
      }
      
      // Function to empty out the articles
      function clear() {
        $("#article-section").empty();
      }

    
  });

  
