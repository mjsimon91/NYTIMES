var searchTerm;
var retrievedRecords;
var startYear;
var endYear;
var queryURL;
var apiKey;
var articleResult;
var nyTimesUrl
var headline ;
var articleSummary ;
var datePublished ;


// On page load

$(document).ready(function(){

function search(){

  apiKey = "e7e8a372d2fd437da15685dc57c44431";
  queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + searchTerm +"&page=" +retrievedRecords + "&begin_date=" + startYear + "&end_date=" + endYear;
  console.log("url " + queryURL);
  //api.nytimes.com/svc/search/v1/article?query={keywords-and-facets}[&amp;params]&amp;api-key={your-API-key}

  $.ajax({
    url: queryURL,
    method:"GET"
  }).done(function(response){
    for (var i = 0; i < response.response.docs.length; i++) {
       nyTimesUrl = response.response.docs[i].web_url;
       headline = response.response.docs[i].headline.main
       articleSummary = response.response.docs[i].snippet
       datePublished = response.response.docs[i].pub_date
      // var articleImage = response.response.docs[i].multimedia[2].url
      articleResult =
        '<div class="card">' +
          '<div class="card-header">' +
            headline +
          '</div>' +
          '<div class="card-body">' +
            '<blockquote class="blockquote mb-0">' +
              '<p>' + articleSummary + '</p>' +
              '<footer class="blockquote-footer">' + datePublished + '</footer>' +
              '</blockquote>' +
            '</div>' +
          '</div>';

        $("#searchResults").append(articleResult);
    }
  });

}

function renderResults(){


      console.log('results ' + articleResult);



}

$("#searchButton").on("click", function(event){
    event.preventDefault();
    $("#searchResults").empty();
    //Trim the search result and save the value of the search Term
    searchTerm = $("#searchTerm").val().trim();
    retrievedRecords = $("#retrievedRecords").val().trim();
    startYear = $("#startYear").val().trim();
    endYear = $("#endYear").val().trim();

    search()
    renderResults();
});

$("#clearButton").on("click", function(event){
  event.preventDefault();
  $("#searchResults").empty();
})

});
