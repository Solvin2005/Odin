// js
const text = document.getElementsByClassName("kin")[0]; // Assuming there is only one element with class "title"
const colors = ["red", "green", "yellow", "blue"];
let index = 0;

// Split the text into individual letters and wrap them in <span> tags
const letters = text.innerText.split("").map((letter) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    return span;
});

// Replace the original text with the span elements
text.innerHTML = "";
letters.forEach((span) => text.appendChild(span));

// Animation for the letters
setInterval(() => {
    letters.forEach((span, i) => {
        setTimeout(() => {
            span.style.color = colors[index];
        }, i * 150); // Delay each letter
    });

    // Cycle through the colors
    index = (index + 1) % colors.length;
}, 1000); // Repeat animation every second
