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
            const nextElement = hr.nextElementSibling;
            if (nextElement && nextElement.tagName.toLowerCase() === 'h6' && nextElement.textContent.startsWith('Sent from')) {
                hr.remove();
                nextElement.remove();
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
            reply.innerHTML = text;
        });
    }

    // Initial call to remove signatures on page load
    removeSignatures();
})();
