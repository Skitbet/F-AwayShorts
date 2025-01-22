function removeContents() {
    /**
     * Remove stuff from youtube.com
     */
    const endpoint = document.querySelector('a#endpoint[title="Shorts"]');
    if (endpoint) {
        endpoint.remove();  
    }
    const shortsSection = Array.from(document.querySelectorAll('ytd-rich-section-renderer.style-scope.ytd-rich-grid-renderer'))
        .find(section => section.querySelector('span#title')?.textContent.trim() === 'Shorts');
    if (shortsSection) {
        shortsSection.remove();
    }

    /**
     * Remove short reals
     */
    const reelShelfRenderer = document.querySelector('ytd-reel-shelf-renderer');
    if (reelShelfRenderer) {
        reelShelfRenderer.remove();
    }

    /**
     * Remove youtubeshort tabs
     */
    const shortsTab = document.querySelector('yt-tab-shape[tab-title="Shorts"]');
    if (shortsTab) {
        shortsTab.remove();
    }
}
  
const observer = new MutationObserver(() => {
    removeContents();  
});
  
observer.observe(document.body, {
    childList: true,   
    subtree: true    
});

document.addEventListener('DOMContentLoaded', removeContents);
