// var DinoText = require('../js/function-name.js').DinoText;
// var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $("button#clearResult").hide();
  $("form.bookSearch").submit(function(event) {

    $('.header').addClass('searchHeader');
    $("button#clearResult").show();
    event.preventDefault();

    var inputtedSearch = $("#search").val();

    $.get('http://www.europeana.eu/api/v2/search.json?wskey=EXCJeCLoy&query='+ inputtedSearch +'').then(function(response) {
      console.log(response);

      var title = response.items[0].title;
      var thumbnail = response.items[0].edmPreview;

      $(".result").append('<img class="artImage "src="'+thumbnail+'" alt="'+title+'">');
      $(".result").append("Top Search Results: " + title + "!");

    });


    $.get("https://api.nasa.gov/planetary/apod?api_key=FZqzzfC0EjAiSrALPbuOtaKiiVZfQDMqmDcyB85z").then(function(response) {

      var image = response.url;

      $(".result").append('<img class="spaceImage" src="'+image+'" alt="">');
      console.log(response);
    });
    $("form.bookSearch")[0].reset();

    $("button#clearResult").click(function() {
    $("div.result").empty();
    $("button#clearResult").hide();
    $('.header').removeClass('searchHeader');
    });
  });
});


// /* Front-end User interface (jquery) code goes in this file */
