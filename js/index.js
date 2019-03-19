function toon() {
  var div = document.getElementById("content");

  if (div.style.display != "flex") {
    div.style.display = "flex";
  } else {
    div.style.display = "none";

  }
}
jQuery(document).ready(function (e) {
  function t(t) {
    e(t).bind("click", function (t) {
      t.preventDefault();
      e(this).parent().fadeOut()
    })
  }
  e(".dropdown-toggle").click(function () {
    var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
    e(".button-dropdown .dropdown-menu").hide();
    e(".button-dropdown .dropdown-toggle").removeClass("active");
    if (t) {
      e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active")
    }
  });
  e(document).bind("click", function (t) {
    var n = e(t.target);
    if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
  });
  e(document).bind("click", function (t) {
    var n = e(t.target);
    if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active");
  })
});

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).position().top + ( $(this).outerHeight() / 2 );
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},1000);

            }

        });

    });

});

$(document).ready(function() {
    $("a").on('click', function(event) {
        $('a').each(function() {
            $(this).removeClass('active');
        })

        $(this).addClass('active');
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});

$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 100) {
        $(".nav").addClass("small")
    } else {
        $(".nav").removeClass("small")
    }
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("boven").style.display = "block";
  } else {
    document.getElementById("boven").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


$( document ).ready(function(){
            $('.notification').fadeIn('slow', function(){
               $('.notification').delay(5000).fadeOut(); 
            });
        });