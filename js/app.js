/* Preloader */
$(document).ready(function () {
    $(".pre-loader").fadeOut();

    document.querySelector(".down-arrow__one").addEventListener("click", () => {
        document.querySelector(".inner-one__first").classList.toggle("inner-one-translate");
    });

    document.querySelector(".down-arrow__two").addEventListener("click", () => {
        document.querySelector(".inner-one__second").classList.toggle("inner-one-translate");
    });

    document.querySelector(".down-arrow__three").addEventListener("click", () => {
        document.querySelector(".inner-one__third").classList.toggle("inner-one-translate");
    });

    document.querySelector(".down-arrow__one").addEventListener("click", () => {
        document.querySelector(".down-arrow__one").classList.toggle("rotate-one");
    });

    document.querySelector(".down-arrow__two").addEventListener("click", () => {
        document.querySelector(".down-arrow__two").classList.toggle("rotate-two");
    });

    document.querySelector(".down-arrow__three").addEventListener("click", () => {
        document.querySelector(".down-arrow__three").classList.toggle("rotate-three");
    });


});