//loaging
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const logo = preloader.querySelector('.loader img');

    // 1. 延遲0.5秒，logo淡入
    setTimeout(() => {
        logo.classList.add('show');
    }, 100);

    // 2. 2秒後，logo淡出
    setTimeout(() => {
        logo.classList.remove('show');
        logo.classList.add('fade-out');
    }, 3000);

    // 3. logo淡出後，背景預載層淡出
    setTimeout(() => {
        preloader.classList.add('fade-out');
    }, 2000);

    // 4. 預載層淡出動畫結束時隱藏並紀錄狀態
    preloader.addEventListener('transitionend', (e) => {
        if (e.propertyName === 'opacity' && preloader.classList.contains('fade-out')) {
            preloader.style.display = 'none';
            sessionStorage.setItem('preloaderShown', 'true');
        }
    });
});


//頁面切換
window.addEventListener('load', () => {
    document.body.classList.add('fade-in');
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


//商品卡片瀑布效果
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.product-list-block-card-container');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 加完class後停止觀察，避免重複觸發
            }
        });
    }, {
        threshold: 0.3, // 元素 10% 進入視窗就觸發
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});



// 滾動效果
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.3,
        }
    );

    document.querySelectorAll(".section-container").forEach((el) => {
        observer.observe(el);
    });
});

//滾動阻尼感
const lenis = new Lenis({
    duration: 50000,
    easing: (t) => 1 - Math.pow(1 - t, 5) // 慣性感
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


//線條滾動
document.addEventListener("DOMContentLoaded", () => {
    const aboutTexts = document.querySelectorAll(".about-text");

    if (aboutTexts.length === 0) return;

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-lines");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    aboutTexts.forEach(el => observer.observe(el));
});


//圖片滾動視差
window.addEventListener('scroll', () => {
    const images = document.querySelectorAll('.about-img');
    const windowHeight = window.innerHeight;

    images.forEach(img => {
        const rect = img.getBoundingClientRect();

        // 判斷圖片在視窗範圍內
        if (rect.top < windowHeight && rect.bottom > 0) {
            // 計算滾動百分比 (0~1)
            const scrollPercent = (windowHeight - rect.top) / (windowHeight + rect.height);

            // 控制圖片垂直移動範圍，負值往上，正值往下
            const translateY = (scrollPercent - 0.5) * 40; // 移動範圍約-20px到+20px

            img.style.transform = `translateY(${translateY}px)`;
        }
    });
});

//切換菜單
function showMenu(id, element) {
    // 切換圖片
    document.querySelectorAll('.product-menu-img').forEach(img => {
        img.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');

    // 切換選單樣式
    document.querySelectorAll('.product-menu-tab li').forEach(tab => {
        tab.classList.remove('active');
    });
    element.classList.add('active');
}