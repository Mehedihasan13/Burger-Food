$(document).ready(function(){mixitup(".item");$(".owl-carousel").owlCarousel({loop:!0,margin:10,responsiveClass:!0,responsive:{0:{items:1,nav:!0},600:{items:2,nav:!1},1e3:{items:3,nav:!0,autoplay:!0}}}),$(".vid-play").magnificPopup({type:"iframe",iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',patterns:{youtube:{index:"youtube.com/",id:"v=",src:"https://www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}},srcAction:"iframe_src"}})}),$(".counting").each(function(){var e=$(this),i=e.attr("data-count");$({countNum:e.text()}).animate({countNum:i},{duration:3e3,easing:"linear",step:function(){e.text(Math.floor(this.countNum))},complete:function(){e.text(this.countNum)}})});