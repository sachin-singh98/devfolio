const html = document.querySelector("html");
const body = document.body;
const header = document.getElementById("header");
const mainNav = document.getElementById("main-navigation");

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
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

function changeThemeColor() {
    let rgbArr = [];
    let r = "", g = "", b = "";

    for (let i = 100; i < 255; i++) {
        rgbArr.push(i);
    }

    r += rgbArr[Math.floor(Math.random() * rgbArr.length)];
    g += rgbArr[Math.floor(Math.random() * rgbArr.length)];
    b += rgbArr[Math.floor(Math.random() * rgbArr.length)];

    html.style.setProperty("--theme", `rgb(${r}, ${g}, ${b})`);
}

changeThemeColor();