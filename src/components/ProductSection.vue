<template>
  <div class="content-box">
      <div class="h1">
          <a>來來來。來看好料的！</a>
      </div>
      <div class="product-list">
          <img src="@/assets/product-img-1.png" alt="產品圖片1" />
          <img src="@/assets/product-img-2.png" alt="產品圖片2" />
          <img src="@/assets/product-img-3.png" alt="產品圖片3" />
          <img src="@/assets/product-img-4.png" alt="產品圖片4" />
          <img src="@/assets/product-img-5.png" alt="產品圖片5" /> 
      </div>
      <div class="btn-box">
        <button class="menu-btn">
        <a>看菜單</a>
      </button>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.content-box {
  display: flex;
  width: 1920px;
  height: 1080px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.h1 {
  display: flex;
  width: 1920px;
  height: 352px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.product-list {
  display: flex;
  align-items: center;
  gap: 37.574px;
}

.btn-box {
  display: flex;
  width: 1920px;
  padding: 144px 772px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.menu-btn {
  width: 375px;
  height: 64px;
}
</style>