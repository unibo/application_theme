import $ from 'jquery';

var ToC =
  "<nav role='navigation' class='table-of-contents'>" +
  "<h2>On this page:</h2>" +
  "<ul>";

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
  "</ul>" +
  "</nav>";

$(".toc").prepend(ToC);