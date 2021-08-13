// 2depth accordion menu
$(document).ready(function() {

  $(".list_q").click(function() {
    $(this).next(".list_a").stop().slideToggle(300);
    $(this).toggleClass('is_active').siblings().removeClass('is_active');
    $(this).next(".list_a").siblings(".list_a").slideUp(300);
  });
});

// layer popup
function layerPopupOpen($t){
  $(".wrap_popup" + "." + $t).stop(true, true).fadeIn(300);
};
function layerPopupClose(){
  $(".wrap_popup").each(function(){
    if($(this).css("display") != "none") $(this).stop(true, true).fadeOut(300);
  });
};



(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }
})()