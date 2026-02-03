const btn = document.getElementById('runaway-btn');
const container = document.getElementById('game-container');

btn.addEventListener('mouseover', () => {
    // Get container dimensions
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Get button dimensions to prevent it from going "halfway" out
    const btnWidth = btn.offsetWidth;
    const btnHeight = btn.offsetHeight;

    // Calculate new random position within the container
    const newX = Math.random() * (containerWidth - btnWidth);
    const newY = Math.random() * (containerHeight - btnHeight);

    // Apply the position relative to the container's top-left
    btn.style.left = `${newX}px`;
    btn.style.top = `${newY}px`;
});

function showCustomAlert() {
    const title = "Max Says";
    const message = "'I love you! I can\'t wait until May 2nd. Happy Valentine\'s Day! ❤️'";
    
    document.getElementById("alertTitle").innerText = title;
    document.getElementById("alertMessage").innerText = message;
    document.getElementById("customAlert").style.display = "block";
}

function closeCustomAlert() {
    document.getElementById("customAlert").style.display = "none";
}

// Close the modal if the user clicks outside of the content
window.onclick = function(event) {
    if (event.target == document.getElementById("customAlert")) {
        closeCustomAlert();
    }
}