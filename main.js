const toggleButton = document.querySelector('.theme-switch__checkbox');
const body = document.body;

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
})

const year = new Date().getFullYear();
document.querySelector('.year').innerHTML = year;