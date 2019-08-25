$(document).ready(function (){
   $('.main').click(function () {
     $(this).children('.hideMe').slideoggle(1200);
      $(this).children('.show').toggle(1500);
    });
    $('.card').hover(function(){
    $(this).css("background-color", "transparent");
   }, function(){
   $(this).css("background-color", "transparent");
  });
});
