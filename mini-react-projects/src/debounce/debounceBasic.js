//Debouncing: Executes the function after a certain period of inactivity (e.g., "run only after the user stops typing for 500ms").
//  It waits for a "pause" in events.
// A simple function we want to debounce
function myExpensiveFunction(event) {
    console.log("Executing expensive function for:", event.target.value);
    // In a real application, this might be an API call, a complex calculation, etc.
}

// The debounce function
function debounce(func, delay) {
    let timeoutId; // This will hold our timer

    return function(...args) {
        const context = this; // Preserve the 'this' context

        // Clear the previous timer if it exists
        clearTimeout(timeoutId);

        // Set a new timer
        timeoutId = setTimeout(() => {
            func.apply(context, args); // Execute the original function
        }, delay);
    };
}

// Example Usage: Input field
const searchInput = document.getElementById('search-input');
const debouncedSearch = debounce(myExpensiveFunction, 500); // Debounce by 500ms

if (searchInput) {
    searchInput.addEventListener('input', debouncedSearch);

    // Also demonstrate with a button click to show it only fires after inactivity
    const myButton = document.getElementById('my-button');
    const debouncedButtonClick = debounce(() => console.log('Button clicked (debounced)!'), 1000);
    if (myButton) {
        myButton.addEventListener('click', debouncedButtonClick);
    }
}