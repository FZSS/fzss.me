jQuery(window).load(function(){
    'use strict';
    var images = ['images/berkeley.png','images/tiananmen.png','images/great.png'];
    var i = 0;
    var timeoutVar;

    function changeBackground() {
        clearTimeout(timeoutVar); // just to be sure it will run only once at a time

        jQuery('.jumbotron').css('background-image', function() {
            if (i >= images.length) {
                i=0;
            }
            return 'url(' + images[i++] + ')';
        });

        // call the setTimeout every time to repeat the function
        timeoutVar = setTimeout(changeBackground, 5000);
    }

    // Call it on the first time and it will repeat
    changeBackground();
});