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

  // btnTop(IE not supports. Supports all major browsers)
  window.scrollY;
  document.scrollingElement.scrollTop;
  document.documentElement.scrollTop;
  document.querySelector('html').scrollTop;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset <= 0) {
      jQuery('#btnTop, #btnBottom').removeClass('showButton');
    } else {
      jQuery('#btnTop, #btnBottom').addClass('showButton');
    }
  });
  jQuery(window).on("touchmove", function (e) {
    if (window.pageYOffset <= 0) {
      jQuery('#btnTop, #btnBottom').removeClass('showButton');
    } else {
      jQuery('#btnTop, #btnBottom').addClass('showButton');
    }
  });
  jQuery('#btnTop').on('click touch', function() {
    jQuery('html,body').animate({ scrollTop: 0 }, 300);
    jQuery('#btnTop').removeClass('showButton');
  });
  jQuery('#btnBottom').on('click touch', function() {
    jQuery('html,body').animate({ scrollTop: $(document).height() }, 500);
    jQuery('#btnBottom').removeClass('showButton');
  });

  // 모바일 100vh 하단 가려지는 현상 해결
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  // document.querySelector('.wrap_result', '.wrap_receipt', '.wrap_error').style.height = window.innerHeight + "px";
});

// loading
// $(document).ready(function(){
// 	$('#preloader').hide(); //첫 시작시 로딩바를 숨겨준다.
// })
// .ajaxStart(function(){
//   $('#preloader').show(); //ajax실행시 로딩바를 보여준다.
// })
// .ajaxStop(function(){
//   $('#preloader').hide(); //ajax종료시 로딩바를 숨겨준다.
// });
$(window).on('load', function() {
  if ($('#preloader').length) {
    $('#preloader').delay(2000).fadeOut('slow', function() {
      $(this).remove();
    });
  }
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