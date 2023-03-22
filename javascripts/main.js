const html = document.querySelector("html");
const body = document.body;
const header = document.getElementById("header");
const mainNav = document.getElementById("main-navigation");
const logo = document.querySelector(".logo");

// fancybox
Fancybox.bind("[data-fancybox]");

// themeColor
function themeColor() {
    const themeArr = [
        "#ffbb2c",
        "#5578ff",
        "#e80368",
        "#e361ff",
        "#47aeff",
        "#ffa76e",
        "#11dbcf",
        "#4233ff",
        "#b20969",
        "#ff5828",
        "#29cc61",
    ];
    let color = themeArr[Math.floor(Math.random() * themeArr.length)];
    return color;
}

html.style.setProperty("--theme", themeColor());

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
    });
};

// filter function
function filter(filterBtns, filterWrap) {
    let clickedBtn = Array.from(filterBtns).find(el => el.classList.contains("active")).getAttribute("data-id");
    let items = Array.from(filterWrap.querySelectorAll("[data-filter]"));
    let activItems = Array.from(filterWrap.querySelectorAll(`[data-filter-type="${clickedBtn}"]`));

    if (clickedBtn !== "all") {
        items.forEach(el => {
            el.classList.add("d-none");
            el.classList.remove("d-block");
        });
        activItems.forEach(el => {
            el.classList.add("d-block");
            el.classList.remove("d-none");
        });
    } else {
        items.forEach(el => {
            el.classList.add("d-block");
            el.classList.remove("d-none");
        });
    }
}

const filterBtns = document.querySelectorAll("#filter1 .btn[data-id]");
const filterContainer = document.querySelector("[data-filter-wrapper]");

// filterProjects function
function filterProject(e) {
    filterBtns.forEach(el => el.classList.remove("active"));
    e.target.classList.add("active");
    filter(filterBtns, filterContainer);
}

// filter
filterBtns.forEach(el => el.addEventListener("click", filterProject));