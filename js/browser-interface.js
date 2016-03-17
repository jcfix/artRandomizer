// var DinoText = require('../js/function-name.js').DinoText;
// var apiKey = require('./../.env').apiKey;

$(document).ready(function() {

  $.get("https://api.nasa.gov/planetary/apod?api_key=FZqzzfC0EjAiSrALPbuOtaKiiVZfQDMqmDcyB85z").then(function(response) {

    var image = response.url;


    $(".result").append('<div class="spaceContent" style="background-image: url('+image+')"></div><div class="spaceText"><h3>NASA Space Photo of the Day </h3><p>'+response.explanation+'</p></div>');
    console.log(response);
  });

  $("button#clearResult").hide();
  $("button#addToCollection").hide();
  $("form.bookSearch").submit(function(event) {

    $('.header').addClass('searchHeader');
    $("button#clearResult").show();
    $("button#addToCollection").show();
    event.preventDefault();

    var inputtedSearch = $("#search").val();

    // $.get("https://api.nasa.gov/planetary/apod?api_key=FZqzzfC0EjAiSrALPbuOtaKiiVZfQDMqmDcyB85z").then(function(response) {
    //
    //   var image = response.url;
    //
    //
    //   $(".result").append('<div class="spaceContent" style="background-image: url('+image+')"></div><div class="spaceText"><p>'+response.explanation+'</p></div>');
    //   console.log(response);
    // });

    $.get('http://www.europeana.eu/api/v2/search.json?wskey=EXCJeCLoy&query='+ inputtedSearch +'').then(function(response) {
      console.log(response);

      var title = response.items[0].title;
      var thumbnail = response.items[0].edmPreview;

      $(".artContent").append('<div class="artItem"><img class="artImage "src="'+thumbnail+'" alt="'+title+'"><p class="artText">Top Search Results: ' + title + '!</p></div>');

    });


    $("form.bookSearch")[0].reset();

    $("button#clearResult").click(function() {
    $("div.artContent").empty();
    $("button#clearResult").hide();
    $('.header').removeClass('searchHeader');
    $("button#addToCollection").hide();
    });
  });
});


// $(".result").append('<div class="spaceContent"><img class="spaceImage" src="'+image+'" alt=""><br><p class="spaceText">'+response.explanation+'</p></div>');
// console.log(response);


// /* Front-end User interface (jquery) code goes in this file */
