$(document).ready(function() {

  // 2depth accordion menu
  $(".list_q").click(function() {
    $(this).next(".list_a").stop().slideToggle(300);
    $(this).toggleClass('is_active').siblings().removeClass('is_active');
    $(this).next(".list_a").siblings(".list_a").slideUp(300);
  });

  $(".list_title").click(function() {
    $(this).next(".list_article").stop().slideToggle(300);
    $(this).toggleClass('is_active').siblings().removeClass('is_active');
    $(this).next(".list_article").siblings(".list_a").slideUp(300);
  });

  // select option style
  $('.select_option1').change(function() {
    var current = $('.select_option1').val();
    if (current != 'null') {
      $('.select_option1').css('color','#333');
    } else {
      $('.select_option1').css('color','#CCC');
    }
  });

  $('.select_option2').change(function() {
    var current = $('.select_option2').val();
    if (current != 'null') {
      $('.select_option2').css('color','#333');
    } else {
      $('.select_option2').css('color','#CCC');
    }
  });

  // btnTop
  // IE not supports, IE 지원 X
  window.scrollY;
  document.scrollingElement.scrollTop;

  // Supports all major browsers
  document.documentElement.scrollTop;
  document.querySelector('html').scrollTop;

  // 스크롤이 끝으로 이동 시 이벤트 발생
  window.addEventListener('scroll', () => {
    if (window.pageYOffset <= 0) {
      jQuery('#btnTop').removeClass('showTopbutton');
    } else {
      jQuery('#btnTop').addClass('showTopbutton');
    }
  });
  jQuery(window).on("touchmove", function (e) {
    if (window.pageYOffset <= 0) {
      jQuery('#btnTop').removeClass('showTopbutton');
    } else {
      jQuery('#btnTop').addClass('showTopbutton');
    }
  });
  jQuery('#btnTop').on('click touch', function() {
    jQuery('html,body').animate({ scrollTop: 0 }, 300);
    jQuery('#btnTop').removeClass('showTopbutton');
  });
});

// layer popup
function layerPopupOpen($t){
  $(".wrap_popup" + "." + $t).stop(true, true).fadeIn(300);
  // $('body').css("overflow", "hidden");
};
function layerPopupClose(){
  $(".wrap_popup").each(function(){
    if($(this).css("display") != "none") $(this).stop(true, true).fadeOut(300);
  });
};