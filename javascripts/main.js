const body = document.body;

const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    body.classList.toggle("menu-open");
});
