$(function() {
  $(window).on("load resize", function() {
    var sect = $("section").height();
    $(".full-screen-img").css("height", window.innerHeight - sect);
  });
});
