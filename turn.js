(function() {
    'use strict';

    let rotation = 0;
    let shake = 0;

    function shakePage() {
        if(event.keyCode === 8) { // Check if backspace key is pressed
            rotation -= 2 + shake;
            shake += 0.1;
        } else {
            rotation += 2 + shake;
            shake += 0.1;
        }

        document.documentElement.style.transform = `rotate(${rotation}deg)`;
        document.documentElement.style.transition = "transform 0.5s ease";

        document.documentElement.style.overflowX = "hidden";
    }

    document.addEventListener('keydown', function(event) {
        shakePage();
    });
})();
