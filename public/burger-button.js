const burger = document.querySelector(".burger-button");
const nav = document.querySelector(".nav-list");

function mobileMenu() {
    burger.classList.toggle("change");

     if (nav.classList.contains("open")) {
        nav.classList.remove("open");
        nav.classList.add("closing");

        nav.addEventListener("animationend", () => {
            nav.classList.remove("closing");
            nav.style.display = "none";
        }, { once: true });
    } else {
        nav.style.display = "flex";
        nav.classList.add("open");
    }
}

function resetMenuOnResize() {
    if (window.innerWidth > 480) {
        nav.style.display = "flex";
        nav.classList.remove("open", "closing");
    } else if (!nav.classList.contains("open")) {
        nav.style.display = "none";
    }
}


burger.addEventListener("click", mobileMenu);
window.addEventListener("resize", resetMenuOnResize);