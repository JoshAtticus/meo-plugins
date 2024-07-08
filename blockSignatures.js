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
        const hrs = document.querySelectorAll('hr');
        hrs.forEach(hr => {
            let nextElement = hr.nextElementSibling;
            while (nextElement && (nextElement.tagName.toLowerCase() === 'h6' || nextElement.tagName.toLowerCase() === 'h5')) {
                const containsLink = nextElement.querySelector('a');
                const containsText = nextElement.textContent.includes('Sent');
                if (containsLink || containsText) {
                    hr.remove();
                    nextElement.remove();
                    break;
                }
                nextElement = nextElement.nextElementSibling;
            }
        });



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

        const replies = document.querySelectorAll('div.reply-outer p');
        replies.forEach(reply => {
            let text = reply.innerHTML.trim();
            if (text.includes('Sent from')) {
                const splitText = text.split('Sent from');
                if (splitText.length > 1) {
                    text = splitText[0].trim();
                }
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
            reply.innerHTML = text;
        });
    }

    // Initial call to remove signatures on page load
    removeSignatures();
})();
