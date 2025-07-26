//loaging
// loading 預載動畫
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const logo = preloader.querySelector('.loader img');

    if (sessionStorage.getItem('preloaderShown')) {
        // 已看過動畫，直接隱藏預載層（用透明度和可見性，避免閃爍）
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        return;
    }

    // 1. 延遲0.5秒，logo淡入
    setTimeout(() => {
        logo.classList.add('show');
    }, 1000);

    // 2. 2秒後，logo淡出
    setTimeout(() => {
        logo.classList.remove('show');
        logo.classList.add('fade-out');
    }, 2500);

    // 3. logo淡出後，背景預載層淡出
    setTimeout(() => {
        preloader.classList.add('fade-out');
    }, 3500);

    // 4. 預載層淡出動畫結束時隱藏並紀錄狀態
    preloader.addEventListener('transitionend', (e) => {
        if (e.propertyName === 'opacity' && preloader.classList.contains('fade-out')) {
            preloader.style.display = 'none';
            sessionStorage.setItem('preloaderShown', 'true');
        }
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
