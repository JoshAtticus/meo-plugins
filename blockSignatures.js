(function() {
    'use strict';

    // Initialize the MutationObserver
    const observer = new MutationObserver((mutations) => {
        // Disconnect observer temporarily to prevent triggering itself
        observer.disconnect();

        mutations.forEach(() => {
            removeSignatures();
        });

        // Reconnect observer after processing mutations
        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    });

    // Start observing changes in the document body
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });

    function removeSignatures() {
        // Remove horizontal rule and subsequent elements that may contain signatures
        const hrs = document.querySelectorAll('hr');
        hrs.forEach(hr => {
            let nextElement = hr.nextElementSibling;
            while (nextElement) {
                const containsLink = nextElement.querySelector('a');
                const containsText = nextElement.textContent.includes('Sent');
                if (containsLink || containsText) {
                    hr.remove();
                    nextElement.remove();
                    nextElement = hr.nextElementSibling; // Reset to new next sibling of hr
                    continue;
                }
                nextElement = nextElement.nextElementSibling;
            }
        });

        // Remove signatures from post contents
        const postContents = document.querySelectorAll('p.post-content > p');
        postContents.forEach(post => {
            let text = post.innerHTML.trim();
            if (text.endsWith('i use arch btw')) {
                text = text.replace(/i use arch btw$/, '').trim();
            }
            if (text.includes('***')) {
                text = text.replace(/\*\*\*/, '').trim();
            }
            if (text.includes('######')) {
                text = text.replace(/######/, '').trim();
            }
            if (text.includes('#####')) {
                text = text.replace(/#####/, '').trim();
            }
            post.innerHTML = text;
        });

        // Remove signatures from replies
        const replies = document.querySelectorAll('div.reply-outer p');
        replies.forEach(reply => {
            let text = reply.innerHTML.trim();
            if (text.includes('Sent from')) {
                text = text.split('Sent from')[0].trim();
            }
            if (text.endsWith('i use arch btw')) {
                text = text.replace(/i use arch btw$/, '').trim();
            }
            if (text.includes('***')) {
                text = text.replace(/\*\*\*/, '').trim();
            }
            if (text.includes('######')) {
                text = text.replace(/######/, '').trim();
            }
            if (text.includes('#####')) {
                text = text.replace(/#####/, '').trim();
            }
            if (text.includes('[visit my website pls]')) {
                text = text.split('[visit my website pls]')[0].trim();
            }
            reply.innerHTML = text;
        });
    }

    // Initial call to remove signatures on page load
    removeSignatures();
})();
