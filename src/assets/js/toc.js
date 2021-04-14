import $ from 'jquery';

var ToC =
  "<h2>On this page:</h2>" +
  "<ul class='vertical menu'>";

var newLine, el, title, link;

$("section > h3").each(function() {

  el = $(this);
  title = el.text();
  link = "#" + el.attr("id");
  
  newLine =
    "<li>" +
      "<a href='" + link + "'>" +
        title +
      "</a>" +
    "</li>";

  ToC += newLine;
});
ToC +=
  "</ul>";

$(".toc").prepend(ToC);