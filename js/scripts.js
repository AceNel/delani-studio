$(document).ready(function(){
   $('.main').click(function () {
     $(this).children('.show').toggle(1200);
      $(this).children('.hideMe').slideToggle(1500);
    });
    $('.card').hover(function(){
    $(this).css("background-color", "transparent");
   }, function(){
   $(this).css("background-color", "transparent");
  });
});
