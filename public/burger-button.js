const burger = document.querySelectorAll(".burger-button");

function dynamicButton (element)  {
    element.classList.toggle("change");
};

// biome-ignore lint/complexity/noForEach: <explanation>
burger.forEach((bar) => {
    bar.addEventListener("click", () =>{console.log(bar);
        dynamicButton(bar)});
});
{/* <div class="burger-button" aria-label="Menu de navigation en mobile"> */}
<div class="bar--1"></div>
<div class="bar--2"></div>
<div class="bar--3"></div>
</div>