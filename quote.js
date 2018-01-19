
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

var getQuote = function(data) {
  $("#quote").text('"' + data.quoteText + '"');
  var twt = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' Author ' + data.quoteAuthor;
  $("#author").text(data.quoteAuthor);
  $(".twitter-share-button").attr("href", twt);
};

var randomColor = function getRandomColor() {
  var r = (Math.floor(Math.random() * 256));
  var g = (Math.floor(Math.random() * 256));
  var b = (Math.floor(Math.random() * 256));
  var hexR = r.toString(16);
  var hexG = g.toString(16);
  var hexB = b.toString(16);
  if (hexR.length == 1) {
    hexR = "0" + hexR;
  }
  if (hexG.length == 1) {
    hexG = "0" + hexG;
  }
  if (hexB.length == 1) {
    hexB = "0" + hexB;
  }
  var hexColor = "#" + hexR + hexG + hexB;
  return hexColor.toUpperCase();
}


$(document).ready(function() {
  $.getJSON(url, getQuote, 'jsonp');
  $('#quote').css("color",randomColor);
});

$("#getQuote").click(function() {
  $.getJSON(url, getQuote, 'jsonp');
  $('#quote').css("color",randomColor);
});
