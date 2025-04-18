<template>
  <div id="app">
    <!-- 背景圖層 -->
    <img class="global-bg" src="@/assets/bg_fullpage.png" alt="背景圖" />

    <!-- 網站主要內容 -->
    <router-view />
  </div>
</template>

<style>
#app {
  position: relative;
  min-height: 100vh; /* 確保頁面最小高度為視窗高度 */
  overflow-x: hidden;
}

.global-bg {
  position: fixed;
  top: 0;  /* 讓圖片固定在頁面頂部 */
  left: 0;
  width: 100%;  /* 讓圖片的寬度適應螢幕 */
  z-index: -1;
  pointer-events: none;
  object-fit: contain;  /* 保持圖片的原始比例，不會變形 */
}
</style>
