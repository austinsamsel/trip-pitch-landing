

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

    $('#menunav').onePageNav({
        currentClass: 'active',
        changeHash: true,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function() {
            //I get fired when the animation is starting
            console.log('start');
        },
        end: function() {
            //I get fired when the animation is ending
            console.log('fin');
        },
        scrollChange: function($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
            console.log('new section')
        }
    });

    $('#topmenu').onePageNav({
        currentClass: 'active',
        changeHash: true,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function() {
            //I get fired when the animation is starting
            console.log('start');
        },
        end: function() {
            //I get fired when the animation is ending
            console.log('fin');
        },
        scrollChange: function($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
            console.log('new section')
        }
    });

})(jQuery, window, document);
