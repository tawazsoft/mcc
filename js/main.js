$(document).ready(function(){
  $('.header ul.toggle').click(function(){
      $(this).toggleClass('active');
      $('.header .sidebar').toggleClass('active');
  })
})


$(document).ready(function(){
  $('#item1').click(function(){
      $(this).toggleClass('active');
      $('#item1').toggleClass('active');
  })
})



$(document).on('ready', function() {


 
  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  
  
})

// portifolio

// Check active classes
var checkClass = function() {
  if ( $('.item').hasClass('hide') ) {
    $('.item').removeClass('hide');
  }
};

// Category filters
$('.all').click( function() {
  checkClass();
});
$('.blue').click( function() {
  checkClass();
  $('.item:not(.blue)').toggleClass('hide');
});
$('.white').click( function() {
  checkClass();
  $('.item:not(.white)').toggleClass('hide');
});
$('.grey').click( function() {
  checkClass();
  $('.item:not(.grey)').toggleClass('hide');
});
$('.yellow').click( function() {
  checkClass();
  $('.item:not(.yellow)').toggleClass('hide');
});
$('.red').click( function() {
  checkClass();
  $('.item:not(.red)').toggleClass('hide');
});


// Active tag
$('.button').click(function(){
  $('.button').removeClass('active');
  $(this).addClass('active');
})

