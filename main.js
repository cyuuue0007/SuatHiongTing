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
