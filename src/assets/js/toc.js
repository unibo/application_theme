import $ from 'jquery';

var ToC =
  "<h2>In questa pagina:</h2>" +
  "<ul class='vertical menu' data-magellan=''>";

var newLine, el, title, link;

$("section h3[id]").each(function() {

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

$(".docs-toc").prepend(ToC);


$("body").on("click",".docs-toc a",function() {
  $(".docs-toc a").removeClass("is-active");
  $(this).addClass("is-active");
});