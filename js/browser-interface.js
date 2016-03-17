// var DinoText = require('../js/function-name.js').DinoText;
// var apiKey = require('./../.env').apiKey;

$(document).ready(function() {

  $("button#clearResult").hide();

  $.get("https://api.nasa.gov/planetary/apod?api_key=FZqzzfC0EjAiSrALPbuOtaKiiVZfQDMqmDcyB85z").then(function(response) {

    var image = response.url;

    $(".result").append('<div class="spaceContent" style="background-image: url('+image+')"></div><div class="spaceText"><h3>NASA Space Photo of the Day </h3><p>'+response.explanation+'</p></div>');
    console.log(response);
  });


  $("form.artSearch").submit(function(event) {
    $('.header').addClass('searchHeader');
    $("button#clearResult").show();

    event.preventDefault();

    var inputtedSearch = $("#search").val();
    console.log(inputtedSearch);

    $.get('http://www.europeana.eu/api/v2/search.json?wskey=EXCJeCLoy&query='+ inputtedSearch +'').then(function(response) {
      console.log("should be appending art");

      var title = response.items[0].title;
      var thumbnail = response.items[0].edmPreview;

      $(".artContent").append('<div class="artItem"><img class="artImage "src="'+thumbnail+'" alt="'+title+'"><p class="artText">Top Search Results: ' + title + '!</p><button id="addToCollection" type="button" name="button">Add to Collection</button><button id="deleteFromCollection" type="button" name="button">Delete From Collection</button></div>');

    }).fail(function(error) {
      console.log(error);

    });

    $("div.artContent").on('click', '#addToCollection', function() {
      $(this).parent('div.artItem').addClass('collected');
      alert("Added!");
    });

    $("div.artContent").on('click', '#deleteFromCollection', function() {
      $(this).parent('div.artItem').remove();
    });

    $("form.artSearch")[0].reset();

    $("button#clearResult").click(function() {
    $(".artItem:not(.collected)").remove();
    $("button#clearResult").hide();
    $('.header').removeClass('searchHeader');

    });
  });
});


// /* Front-end User interface (jquery) code goes in this file */
