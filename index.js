let btnInc = document.getElementById("btn-inc");
let btnDec = document.getElementById("btn-dec");
let resetBtn = document.getElementById("r-btn");
let val = document.getElementById("c-value");
let dark = document.getElementById("dm-btn");
let body = document.querySelector("body");

let count = 0;
let mode = "light";

// Increment Button with Click Animation
btnInc.addEventListener("click", () => {
    if (count === 10) return;
    count++;
    val.innerText = count;
    animateButton(btnInc);
});

// Decrement Button with Click Animation
btnDec.addEventListener("click", () => {
    if (count > 0) {
        count--;
    }
    val.innerText = count;
    animateButton(btnDec);
});

// Reset Button with Click Animation
resetBtn.addEventListener("click", () => {
    count = 0;
    val.innerText = count;
    animateButton(resetBtn);
});

// Dark Mode Toggle
dark.addEventListener("click", () => {
    if (mode === "light") {
        body.classList.add("dark-mode");
        dark.innerText = "LM";
        mode = "dark";
    } else {
        body.classList.remove("dark-mode");
        dark.innerText = "DM";
        mode = "light";
    }
});

// Click animation function
function animateButton(button) {
    button.classList.add("click-animation");
    setTimeout(() => {
        button.classList.remove("click-animation");
    }, 300); // Animation duration
}
