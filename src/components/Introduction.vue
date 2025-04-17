<!-- src/components/WelcomeSection.vue -->
<template>
  <section class="content">
    <div class="content-bg">
      <img src="@/assets/bg_fullpage.png" alt="網站背景" />
    </div>
    <div class="contenr-wrapper">
      <div class="introduction-img">
        <img src="@/assets/introduction-img-1.png" alt="簡介圖片" />
      <div class="content-text1">
         <a>歡迎來到雪香庭。</a>
      </div>
      <div class="content-text2">
        <a>雪香亭以大林早期最大酒家「雪香亭大酒家」為命名， 希望藉由老屋空間結合甜食咖啡，來創造雪香亭招牌的新生命， 並讓更多人進入空間認識地方文化背景。</a>        </div>
        <button class="btn-outline">更多介紹</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

/* 主區塊 */
.content-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 1200px;              /* 設定固定寬度 */
  height: 600px;              /* 設定固定高度 */
  background-image: url('@/assets/bg_fullpage.png'); /* 背景圖片 */
  background-size: contain;  /* 保持圖片比例，縮放至容器內完整顯示 */
  background-position: center; /* 背景圖片置中顯示 */
  background-repeat: no-repeat; /* 防止圖片重複 */
  z-index: -1;
}

/* 主區塊背景 */
.content-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 讓圖片完整鋪滿區塊，不變形 */
  z-index: -1;
}

/* 簡介圖片 */
.introduction-img {
  position: relative;
  margin: 0;
  width: 590px;
  height: 758px;
}

/* 簡介文字 */
.content-text1 {
  display: flex;

}
</style>