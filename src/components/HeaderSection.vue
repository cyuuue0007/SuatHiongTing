<!-- src/components/HeaderSection.vue -->
<template>
    <header class="header">
      <img src="@/assets/logo.png" alt="雪香亭 Logo" class="logo" />
      <nav class="nav">
        <a href="#about">關於我們</a>
        <a href="#products">販售好物</a>
        <a href="#location">如何抵達</a>
      </nav>
    </header>
  </template>
  
  <script setup>
  // 如果未來有 props 或事件可以在這處理
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 0px 0;
  }
  .nav a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
  }
  .logo {
    height: 60px;
  }
  </style>
  