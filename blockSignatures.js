(function() {
    'use strict';

    function removeSignatures() {
        try {
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
                let text = post.textContent.trim();
                if (text.endsWith('i use arch btw')) {
                    text = text.replace(/i use arch btw$/, '').trim();
                }
                post.textContent = text;
            });

            const replies = document.querySelectorAll('div.reply-outer p');
            replies.forEach(reply => {
                let text = reply.textContent.trim();
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
                reply.textContent = text;
            });
        } catch (e) {
            console.error('Error in removeSignatures:', e);
        }
    }

    const observer = new MutationObserver((mutations) => {
        try {
            let shouldRemoveSignatures = false;
            mutations.forEach(mutation => {
                if (mutation.addedNodes.length || mutation.removedNodes.length) {
                    shouldRemoveSignatures = true;
                }
            });
            if (shouldRemoveSignatures) {
                removeSignatures();
            }
        } catch (e) {
            console.error('Error in MutationObserver:', e);
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });

    document.addEventListener('DOMContentLoaded', () => {
        removeSignatures();
    });

})();
