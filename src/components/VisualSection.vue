<!-- src/components/WelcomeSection.vue -->
<template>
  <section class="full-page">
    <section class="welcome-section">
      <!-- 導航選單 -->
      <nav class="navbar">
        <ul>
          <li><a href="#about">關於我們</a></li>
          <li><a href="#services">販售商品</a></li>
          <li><a href="#how-to-get-there">如何抵達</a></li>
        </ul>
      </nav>

      <!-- 店面圖片 -->
      <div class="content">
        <img src="@/assets/shop.jpg" alt="店面照片" />
      </div>

      <!-- 店面圖片效果 -->
      <div class="content2">
        <img src="@/assets/shopBG.svg" alt="店面照片背景" >
      </div>

      <!-- logo -->
      <div class="logo">
        <img src="@/assets/logo.svg" alt="logo" />
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>

/* 確保區塊本身填滿整個視窗 */
.welcome-section {
  margin: 0;
  padding: 0;
  width: 100%;  /* 100% 螢幕寬度 */
  height: 100vh; /* 100% 螢幕高度 */
  overflow: hidden; /* 隱藏溢出部分 */
  position: relative; /* 讓navbar定位相對於這個區塊 */
}

/* 店面圖片 */
.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* 確保圖片填滿視窗 */
.content img {
  width: 100%;          /* 使圖片寬度為100% */
  height: 100%;         /* 使圖片高度為100% */
  object-fit: cover;    /* 保持比例並覆蓋 */
  object-position: center; /* 圖片保持居中 */
  display: block;       /* 去除圖片下方的空隙 */
}


/* 確保圖片填滿視窗 */
.content2 img {
  width: 100%;          /* 使圖片寬度為100% */
  height: 100%;         /* 使圖片高度為100% */
  object-fit: cover;    /* 保持比例並覆蓋 */
  object-position: center; /* 圖片保持居中 */
  display: block;       /* 去除圖片下方的空隙 */
}

/* logo 的位置 */
.logo {
  position: absolute;
  top: 109px;   /* 根據設計稿的上邊距 */
  right: 902px; /* 根據設計稿的右邊距 */
  bottom: 854px; /* 根據設計稿的下邊距 */
  left: 901px;  /* 根據設計稿的左邊距 */
}

.logo img {
  width: auto; /* 根據視窗寬度調整 */
  height: auto; /* 保持比例 */
}

/* 導航選單 */
.navbar {
  position: absolute;
  top: 90%;   /* 將導航選單設定為距上20px */
  left: 50%;   /* 水平居中 */
  transform: translateX(-50%); /* 完全居中對齊 */
  padding: 10px 20px; /* 給導航條增加內邊距 */
  border-radius: 5px; /* 圓角 */
  z-index: 10;  /* 確保選單在其他元素前面 */
}

/* 設置導航選單列表 */
.navbar ul {
  list-style: none;
  display: flex;
  justify-content: center; /* 水平居中 */
}

/* 每個導航項目 */
.navbar li {
  margin: 0 15px; /* 每個選項之間的間距 */
}

/* 導航選項的樣式 */
.navbar a {
  color: $white; /* 白色文字 */
  transition: color 0.3s ease; /* 添加過渡效果 */
}

/* 滑鼠懸停時變色 */
.navbar a:hover {
  color: $primary;
}
</style>
