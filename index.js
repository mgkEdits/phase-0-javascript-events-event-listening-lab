
function addingEventListener() {
    // Inside this function, we select the button element
    const button = document.querySelector("input[type='button']");
    
    // Define the clickAlert function
    function clickAlert() {
        alert('I was clicked!');
    }
    
    // Add the click event listener to the button
    button.addEventListener('click', clickAlert);
}

// To set up the event listener, call the addingEventListener function
addingEventListener();