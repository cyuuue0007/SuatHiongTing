<template>
  <section class="content">
    <div class="content-wrapper">
      <div class="left-col">
        <img src="@/assets/introduction-img-1.png" alt="簡介圖片" class="intro-img" />
      </div>
      <div class="right-col">
        <div class="text1">歡迎來到雪香庭。</div>
        <div class="text2">
          雪香亭以大林早期最大酒家「雪香亭大酒家」為命名，<br />
          希望藉由老屋空間結合甜食咖啡，來創造雪香亭招牌的新生命，<br />
          並讓更多人進入空間認識地方文化背景。
        </div>
        <button class="btn-outline">更多介紹</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.content {
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  padding: 40px;
  gap: 60px;
  background-color: rgba(255, 255, 255, 0.8); // 讓背景圖透出一點，但字好讀
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.left-col, .right-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.left-col {
  align-items: center;
}

.right-col {
  gap: 20px;
}

.intro-img {
  width: 100%;
  max-width: 590px;
  height: auto;
}

.text1 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 16px;
}

.text2 {
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 24px;
}

.btn-outline {
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid #333;
  background-color: transparent;
  color: #333;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background-color: #333;
  color: #fff;
}
</style>
