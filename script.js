let isScrolling;

window.addEventListener("scroll", function () {
    // Hide navigation bar
    document.querySelector("header").style.top = "-60px";
    document.querySelector("nav").style.top = "-60px";

    // Clear the previous timer
    clearTimeout(isScrolling);

    // Set the timer to resume the display after 500ms of scrolling.
    isScrolling = setTimeout(() => {
        document.querySelector("header").style.top = "0";
        document.querySelector("nav").style.top = "60px";
    }, 500);
});
