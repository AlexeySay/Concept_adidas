// slider (slick)
document.addEventListener("DOMContentLoaded", () => {
    const slider = $("#slider");
    slider.slick({
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        dots: true
    });
});
// cart
let cart = 0;

const btnAdd = document.querySelector("#addCart")
btnAdd.addEventListener( "click", () => {
    cart++
    document.querySelector("#cart").innerHTML = `Cart [ ${cart} ]`
})