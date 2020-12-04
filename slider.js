const slider_dot = document.querySelectorAll(".slider__item")

slider_dot.forEach((item) => {
    item.addEventListener("click", () => {
        let currentDot = item

        slider_dot.forEach((item) => item.classList.remove("active"))

        currentDot.classList.add("active")
    })
});