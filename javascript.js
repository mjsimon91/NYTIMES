var searchTerm;
var retrievedRecords;
var startYear;
var endYear;
var queryURL;

// On page load

$(document).ready(function(){

function search(){

  queryURL = "placeholder";

  $.ajax({
    url: queryURL,
    method:"GET"
  }).done(function(response){
    for (var i = 0; i < response.data.length; i++) {
      console.log(response);
    }
  });

}







});
