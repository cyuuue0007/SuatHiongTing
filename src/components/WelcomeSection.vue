<!-- src/components/WelcomeSection.vue -->
<template>
  <section class="welcome-section">
    <div class="content">
      <img src="@/assets/shop.jpg" alt="店面照片" />
      <div class="text-block">
        <h2>歡迎來到雪香亭。</h2>
        <p>
          雪香亭以大林中華路老宅「雪香亭大本營」為本，將豆花甜點搭配懷舊自製風格，與老屋情調完美結合。
        </p>
        <button class="btn-outline">更多介紹</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.welcome-section {
  background-color: #6b2e24;
  padding: 80px 20px;
  display: flex;
  justify-content: center;
}

.content {
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  background: white;
  padding: 0px;
  border-radius: 8px;
}

.content img {
  width: 100%;
  max-width: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 30px;
}

.text-block {
  flex: 1;
  color: #3b2b23;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-block h2 {
  font-size: 24px;
  margin-bottom: 16px;
}

.text-block p {
  line-height: 1.6;
  margin-bottom: 24px;
}

.btn-outline {
  border: 1px solid #3b2b23;
  background: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.btn-outline:hover {
  background-color: #3b2b23;
  color: white;
}
</style>
  