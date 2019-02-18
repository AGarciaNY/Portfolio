/*global $*/
var ieRotate = new function () {
    var me = this,
        $saturn,
        initialPosition,
        radius = 150;
    
    /* 
     * Initialize the animation here.
     */
    me.init = function () {
        
        // Caches the jQuery object for performance reasons.
        $saturn = $('#saturn');
        
        // Stores the initial position of Saturn.  Used later when calculating
        // the orbit animation.
        initialPosition = {
            x: parseInt($saturn.css('left')),
            y: parseInt($saturn.css('top'))
        };
        
        // starts the aniamtion.
        rotateOnce();
    }
    
    function rotateOnce() {
        
        /*
         * jQuery.animate() was designed to animate DOM objects by tweening
         * numeric CSS property values.  This is fine when moving these DOM
         * objects in straight lines, but not so good when trying to move an 
         * object in a circular path.  This will show you how you can work 
         * around this limitation.
         */
        
        // Step 1: Set a dummy property to the angle of the initial position
        //         of Saturn.  We use text-indent, since it doesn't do anything
        //         on an image.
        $saturn.css('text-indent', 0);
        
        // Step 2: We set up jQuery.animate() to do the animation by ....
        $saturn.animate(
            // ... first setting the final value of text-indent to be 2*π 
            // radians, which is the same as 360 degrees ... 
            {
                'text-indent': 2*Math.PI
            }, {
                
                /*
                 * ... next we set up a step function that will generate the 
                 * frame when the angle stored in the text-indent property
                 * at this particular part of the animation.  The formulas used
                 * for the x and y coordinates are derived using the 
                 * polar equation of a circle.  For those that are unfamiliar
                 * with polar equations, take a look at 
                 * http://sites.csn.edu/istewart/mathweb/math127/polar_equ/polar_equ.htm
                 */
                step: function (now) {
                    $saturn.css('left', initialPosition.x + radius * Math.cos(now))
                           .css('top', initialPosition.y + radius * Math.sin(now))
                },
                
                // This makes the animation last 4000milliseconds (= 4 seconds)
                duration: 4000,
                
                // The easing property is analogeous to the CSS3 
                // animation-timing-funciton
                easing: 'linear',
                
                // Once the animation finishes, we call rotateOnce() again so
                // that the animation is repeated.
                complete: rotateOnce
            }
        );
    }
}

$(document).ready(ieRotate.init);