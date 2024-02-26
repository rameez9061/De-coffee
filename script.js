let open  = document.getElementById("open");
let close = document.getElementById("close")

let nav = document.getElementsByClassName("navigation")[0];

open.addEventListener("click",()=>{

    nav.style.animation = "open 0.5s forwards ease-in-out";
    console.log("hello ")
})
close.addEventListener("click",()=>{

    nav.style.animation = "close 0.5s forwards ease-in-out";
    console.log("not hello ")
})




let comments = document.querySelector(".comments");
let comment = document.querySelectorAll(".comment");
let btn = document.getElementById("slide");
let btn2 = document.getElementById("slide2");

let counter = 0; // Start from 0 to match array indices
let size = comment[0].clientWidth;

// Function to update the slider position
function updateSlider() {
    size = comment[0].clientWidth; // Recalculate the size of a single comment

    // Calculate the new translation value based on the current counter and size
    let newTranslateX = -size * counter;

    // Apply the transition and transformation
    comments.style.transition = "transform 0.6s ease-in-out";
    comments.style.transform = `translateX(${newTranslateX}px) translateZ(0)`;
}

// Initial setup
updateSlider();

// Event listener for forward button
btn.addEventListener("click", () => {
    // Increment the counter for forward movement
    counter++;

    // Update the slider position
    updateSlider();

    console.log("clicked forward");
});

// Event listener for backward button
btn2.addEventListener("click", () => {
    // Decrement the counter for backward movement
    counter--;

    // Ensure the counter doesn't go below 0
    if (counter < 0) {
        counter = 0;
    }

    // Update the slider position
    updateSlider();

    console.log("clicked backward");
});

// Event listener for window resize
window.addEventListener("resize", () => {
    // Update the slider position when the window is resized
    updateSlider();
});
