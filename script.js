function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');

 // Add scrolling only if menu is open
    if (navLinks.classList.contains('show')) {
    navLinks.style.overflowY = "auto"; 
    } else {
    navLinks.style.overflowY = "hidden"; 
    }

}

// 让所有导航和 Explore 按钮支持平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // 阻止默认跳转
        const targetId = this.getAttribute('href').substring(1); // 获取目标 ID
        const targetElement = document.getElementById(targetId); // 获取目标元素

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // 平滑滚动
                block: 'start' // 滚动到顶部对齐
            });
        }

        // 关闭移动端菜单（如果是小屏幕）
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
        }
    });
});
