let isScrolling;

window.addEventListener("scroll", function () {
    // 隐藏导航栏
    document.querySelector("header").style.top = "-60px";
    document.querySelector("nav").style.top = "-60px";

    // 清除之前的定时器
    clearTimeout(isScrolling);

    // 设定定时器，在停止滚动 500ms 后恢复显示
    isScrolling = setTimeout(() => {
        document.querySelector("header").style.top = "0";
        document.querySelector("nav").style.top = "60px";
    }, 500);
});