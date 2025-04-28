const burger = document.querySelectorAll(".burger-button");

function dynamicButton (element)  {
    element.classList.toggle("change");
};

// biome-ignore lint/complexity/noForEach: <explanation>
burger.forEach((bar) => {
    bar.addEventListener("click", () =>{console.log(bar);
        dynamicButton(bar)});
});
