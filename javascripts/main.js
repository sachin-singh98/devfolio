const html = document.querySelector("html");
const body = document.body;
const header = document.getElementById("header");
const mainNav = document.getElementById("main-navigation");
const logo = document.querySelector(".logo");

// menu
const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    body.classList.toggle("menu-open");
});

// scrollToSection
const navLinks = document.querySelectorAll("[data-link]");
for (const link of navLinks) {
    link.addEventListener("click", () => {
        let id = link.getAttribute("data-link");
        let section = document.getElementById(id);

        navLinks.forEach((el) => el.classList.remove("active"));
        link.classList.add("active");
        body.classList.remove("menu-open");
        menuBtn.classList.remove("active");
        window.scrollTo(0, Number(section.offsetTop) - header.clientHeight);
    });
}

// sections
const sections = document.querySelectorAll("section.section");

window.onscroll = () => {
    sections.forEach((el) => {
        let id = el.getAttribute("id");
        let link = document.querySelector(`[data-link='${id}']`);
        if (window.scrollY > el.offsetTop) {
            navLinks.forEach((el) => el.classList.remove("active"));
            link.classList.add("active");
        }
    })
}

// fancybox
Fancybox.bind("[data-fancybox]");

// themeColor
function themeColor() {
    let themeArr = ["#ffbb2c", "#5578ff", "#e80368", "#e361ff", "#47aeff", "#ffa76e", "#11dbcf", "#4233ff", "#b20969", "#ff5828", "#29cc61"];
    let color = themeArr[Math.floor(Math.random() * themeArr.length)];
    return color;
}

html.style.setProperty("--theme", themeColor());