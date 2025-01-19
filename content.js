function removeContents() {
    const endpoint = document.querySelector('a#endpoint[title="Shorts"]');
    if (endpoint) {
        endpoint.remove();  
    }
    const shortsSection = Array.from(document.querySelectorAll('ytd-rich-section-renderer.style-scope.ytd-rich-grid-renderer'))
        .find(section => section.querySelector('span#title')?.textContent.trim() === 'Shorts');
    if (shortsSection) {
        shortsSection.remove();
    }
}
  
const observer = new MutationObserver(() => {
    removeContents();  
});
  
observer.observe(document.body, {
    childList: true,   
    subtree: true    
});

// Ensure the script runs on initial load
document.addEventListener('DOMContentLoaded', removeContents);
