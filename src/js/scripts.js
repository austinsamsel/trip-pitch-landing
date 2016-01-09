

(function ($, window, document, undefined) {

  // fix menu when passed
  $('.masthead')
  .visibility({
    once: false,
    offset:100,
    onBottomPassed: function() {
      $('.fixed.menu').transition('fade in');
    },
    onBottomPassedReverse: function() {
      $('.fixed.menu').transition('fade out');
    }
  })
  ;

  // fixed nav & location hash urls
  $('#followingMenu').onePageNav({
    currentClass: 'active',
    changeHash: true,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    changeHash: false,
    filter: '',
    easing: 'swing',
    begin: function() {
      //I get fired when the animation is starting
    },
    end: function() {
      //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
      //I get fired when you enter a section and I pass the list item of the section
      console.log('new section')
    }
  });

  // smooth scroll
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  //mobile nav popup
  $('.nav-btn').click(function(e){
    $('.ui.basic.modal').modal('show');
  });

  $('.modal-nav li a').click(function(){
    $('.nav-close').click();
  })

  //mailchimp submit #1
  $('#mc-embedded-subscribe-form').ajaxChimp({
    url: 'http://trippitch.us12.list-manage.com/subscribe/post?u=60a267c1d4bc0f7ce90f04669&amp;id=9bef743691',
    callback: callbackFunction
  });
  function callbackFunction(resp) {
    if (resp.result === 'success') {
      $('#confirmation-msg').html('<span class="success">Thank you for registering!</span>');
    } else if(resp.result === 'error') {
      $('#confirmation-msg').html('<span class="error">Something went wrong. Email us: contactus@trippitch.com</span>');
    }
  }
  //mailchimp submit #2

  $('#mc-embedded-subscribe-form2').submit(function(e) {
  var $this = $(this);
  $.ajax({
      type: "POST", // GET & url for json slightly different
      url: "http://trippitch.us12.list-manage.com/subscribe/post-json?u=60a267c1d4bc0f7ce90f04669&amp;id=9bef743691&c=?",
      data: $this.serialize(),
      dataType    : 'jsonp',
      contentType: "application/json; charset=utf-8",
      error       : function(err) { alert("Could not connect to the registration server."); },
      success     : function(data) {
          if (data.result != "success") {
              $('#confirmation-msg2').html('<span class="error">Something went wrong. Email us: contactus@trippitch.com</span>');
          } else {
              $('#confirmation-msg2').html('<span class="success">Thank you for registering!</span>');
          }
      }
  });
  return false;
});

})(jQuery, window, document);
