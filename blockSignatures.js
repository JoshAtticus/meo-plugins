(function() {
    'use strict';

    function removeSignatures() {
        const hrs = document.querySelectorAll('hr');
        hrs.forEach(hr => {
            const nextElement = hr.nextElementSibling;
            if (nextElement && nextElement.tagName.toLowerCase() === 'h6' && nextElement.textContent.startsWith('Sent from')) {
                hr.remove();
                nextElement.remove();
            }
        });
    }

    const observer = new MutationObserver((mutations) => {
        mutations.forEach(() => {
            removeSignatures();
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });

    removeSignatures();
})();
