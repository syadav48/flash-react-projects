function debounceImmediate(func, delay, immediate = false) {
    let timeoutId;
    let inDebounce = false; // Flag to track if we are currently in a debounced state

    return function(...args) {
        const context = this;

        const later = function() {
            timeoutId = null; // Clear the timeout ID
            if (!immediate) {
                func.apply(context, args); // Execute if not immediate
            }
        };

        const callNow = immediate && !timeoutId; // Should we call immediately?

        clearTimeout(timeoutId);
        timeoutId = setTimeout(later, delay);

        if (callNow) {
            func.apply(context, args); // Execute immediately
        }
    };
}

// Example Usage: Button click that fires immediately, then debounces
const immediateButton = document.getElementById('immediate-button');
const debouncedImmediateClick = debounceImmediate(() => {
    console.log('Immediate Button clicked!');
}, 1000, true); // immediate: true

if (immediateButton) {
    immediateButton.addEventListener('click', debouncedImmediateClick);
}

// Example Usage: Resizing window
// You might want to process resize *after* user stops, but some initial layout might be useful.
// Though for resize, trailing edge is more common.
const resizeDiv = document.getElementById('resize-me');
const debouncedResize = debounceImmediate(() => {
    console.log('Window resized (debounced)!');
    if (resizeDiv) {
        resizeDiv.style.width = window.innerWidth / 2 + 'px';
        resizeDiv.style.height = window.innerHeight / 2 + 'px';
    }
}, 300, true);

window.addEventListener('resize', debouncedResize);