const html = document.querySelector("html");
const body = document.body;
const header = document.getElementById("header");
const mainNav = document.getElementById("main-navigation");
const logo = document.querySelector(".logo");

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

function addEventListenerIfNotNull(element, event, listener) {
    if (element) {
        element.addEventListener(event, listener);
    }
}

// menu
const menuBtn = document.getElementById("menu-btn");
function toggleMenu(e) {
    e.target.classList.toggle("active");
    body.classList.toggle("menu-open");
}

addEventListenerIfNotNull(menuBtn, "click", toggleMenu);

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
        window.scrollTo(0, Number(section.offsetTop) + 1);
    });
}

// active links on sections
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
    if (filterBtns && filterWrap) {
        let activeBtn = Array.from(filterBtns).find(el => el.classList.contains("active")).getAttribute("data-filter-btn");
        let items = Array.from(filterWrap.querySelectorAll("[data-filter-box]"));
        let activItems = Array.from(filterWrap.querySelectorAll(`[data-filter-box="${activeBtn}"]`));

        if (activeBtn !== "all") {
            items.forEach(el => el.classList.remove("active"));
            activItems.forEach(el => el.classList.add("active"));
        } else {
            items.forEach(el => el.classList.add("active"));
        }
    }
}

const filterBtns = document.querySelectorAll("#filter1 .btn[data-filter-btn]");
const filterContainer = document.querySelector("[data-filter-wrapper]");

filter(filterBtns, filterContainer);

// filterProjects function
function filterProject(e) {
    filterBtns.forEach(el => el.classList.remove("active"));
    e.target.classList.add("active");
    filter(filterBtns, filterContainer);
}

// filter
filterBtns.forEach(el => addEventListenerIfNotNull(el, "click", filterProject));

// mode-changer
const modeBtn = document.getElementById("mode-btn");

modeBtn?.addEventListener("click", () => {
    html.classList.toggle("light-mode");
    if (window.localStorage.getItem("mode") === "light") {
        window.localStorage.removeItem("mode");
    } else {
        window.localStorage.setItem("mode", "light");
    }
});

(function () {
    if (window.localStorage.getItem("mode") === "light") {
        html.classList.add("light-mode");
    } else {
        html.classList.remove("light-mode");
    }
})();

// tilt
VanillaTilt.init(document.querySelectorAll("[data-tilt-box]"), {
    reverse: true,
    max: 15,
    speed: 400,
    scale: 1.05,
});

// copylink
const links = document.querySelectorAll("[data-tooltip]");

for (const link of links) {
    let output = document.createElement("span");
    output.classList.add("tooltip-text");

    link.addEventListener("click", e => {
        let text = link.getAttribute("data-text");

        navigator.clipboard.writeText(text).then(() => {
            output.innerHTML = `Copied: <i>${text}</i>`;
            link.appendChild(output);

            setTimeout(() => {
                link.removeChild(output);
            }, 2000);
        });

        e.preventDefault();
    });
}

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

// particles
// Include images
let img_src = [
    'images/bootstrap.svg',
    'images/html5.svg',
    'images/sass.svg',
    'images/tailwind.svg',
    'images/css.svg',
    'images/js.svg',
    'images/jquery.svg',
    'images/react.svg',
    'images/figma.svg',
    'images/id.svg',
    'images/xd.svg',
    'images/ps.svg',
    'images/ai.svg',
    'images/sketch.svg',
    'images/vscode.svg',
    'images/github.svg',
];

// Name images included
let image_type = img_src.map(function (cuurentEl, index) { return "image" + index });

// Configure particles-js
particlesJS('particles-js',
    {
        "particles": {
            "number": {
                "value": img_src.length, // No of images
                "density": {
                    "enable": true,
                    "value_area": 450 // Specify area (Lesser is greater density)
                }
            },
            "shape": {
                "type": image_type, // Add images to particle-js
            },
            "opacity": {
                "value": .1, // Adjust opactiy
            },
            "size": {
                "value": 22, // Adjust the image size
            },
            "move": {
                "enable": true,
                "speed": 3,   // Speed of particle motion
                "bounce": true,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "resize": true
            },
        },
        "retina_detect": true
    }
);

// scroll-top
const scrollTopBtn = document.getElementById("scroll-top-btn");
const scrollLoader = document.querySelector("#scroll-top-btn .loader");
scrollLoader.style.display = "none";

scrollTopBtn?.addEventListener("click", e => {
    window.scrollTo(0, 0);
});

if (window.scrollY > 200) {
    scrollTopBtn?.classList.add("active");
} else {
    scrollTopBtn?.classList.remove("active");
}

window.onscroll = () => {
    if (window.scrollY > 200) {
        scrollTopBtn?.classList.add("active");
    } else {
        scrollTopBtn?.classList.remove("active");
    }
}

// scroll-down
const scrollDownBtn = document.getElementById("scroll-down-btn");
const main = document.getElementById("main").offsetTop - 8;
scrollDownBtn?.addEventListener("click", function () {
    window.scrollTo(0, main);
})