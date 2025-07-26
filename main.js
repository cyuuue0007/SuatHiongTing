//loaging
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const logo = preloader.querySelector('.loader img');

    // 1. logo 淡入（CSS已設定 0.5s 延遲 + 1s 淡入）
    // 2. 停留 0.8 秒後開始 logo 淡出（0.5秒）
    setTimeout(() => {
        logo.style.animation = 'logoFadeOut 0.5s forwards';
    }, 2300); // 0.5 + 1 + 0.8 = 2.3 秒

    // 3. logo 淡出結束後，再讓整個背景淡出（0.5秒）
    setTimeout(() => {
        preloader.classList.add('fade-out');
    }, 2800); // logo淡出0.5秒後開始背景淡出

    // 4. 背景淡出結束後隱藏 loading 容器
    preloader.addEventListener('transitionend', () => {
        preloader.style.display = 'none';
    });
});

//logo淡出
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const logo = preloader.querySelector('.loader img');

    setTimeout(() => {
        logo.classList.add('fade-out');  // 加 class 觸發淡出動畫
    }, 2300); // 0.5 + 1 + 0.8 = 2.3 秒

    setTimeout(() => {
        preloader.classList.add('fade-out');
    }, 2800);

    preloader.addEventListener('transitionend', () => {
        preloader.style.display = 'none';
    });
});













//輪播
document.addEventListener("DOMContentLoaded", () => {
    const marquee = document.getElementById("marqueeTrack");

    // 複製一份內容（無縫關鍵）
    const clone = marquee.cloneNode(true);
    marquee.parentNode.appendChild(clone);

    // 把原本跟複製的內容包在一起當作動畫元素
    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.width = "max-content";

    marquee.parentNode.replaceChild(wrapper, marquee);
    wrapper.appendChild(marquee);
    wrapper.appendChild(clone);

    // 加入動畫 class
    wrapper.classList.add("marquee-track");

    // 計算總寬度 & 設定動畫時間
    const totalWidth = marquee.offsetWidth;
    const speed = 25; // px/秒，妳可以調整速度
    const duration = totalWidth / speed;

    wrapper.style.animationDuration = `${duration}s`;
});

//懸浮按鈕
document.addEventListener("DOMContentLoaded", function () {
    const floatBtn = document.querySelector(".floating-button");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            floatBtn.classList.add("active");
        } else {
            floatBtn.classList.remove("active");
        }
    });
});

//nav陰影
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".suathiongting-header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 10) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

//小網選單
window.addEventListener('scroll', function () {
    const header = document.querySelector('.suathiongting-header');
    const floatingBtn = document.querySelector('.floating-button');

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        floatingBtn.classList.add('active');
    } else {
        header.classList.remove('scrolled');
        floatingBtn.classList.remove('active');
    }
});

//小網選單展開
const menuOpen = document.querySelector('.nav-menu-open');
const menuClose = document.querySelector('.mobile-nav-menu-close');
const overlay = document.querySelector('.mobile-nav-overlay');

menuOpen.addEventListener('click', () => {
    overlay.classList.add('active');
});

menuClose.addEventListener('click', () => {
    overlay.classList.remove('active');
});
