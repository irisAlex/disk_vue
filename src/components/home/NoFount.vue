<template>
    <div class="not-found-container">
      <div class="not-found-content">
        <h1>404 - Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <router-link to="/">Go to Home</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  };
  </script>


<!-- views/NotFound.vue -->

  
  <style scoped>
  .not-found-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f8f8f8; /* 背景颜色可以根据你的设计进行调整 */
  }
  
  .not-found-content {
    text-align: center;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff; /* 内容区域的背景颜色 */
  }
  
  h1 {
    color: #e74c3c; /* 主标题颜色 */
  }
  
  p {
    margin-top: 10px;
    color: #555; /* 段落文字颜色 */
  }
  
  router-link {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #3498db; /* 按钮背景颜色 */
    color: #fff; /* 按钮文字颜色 */
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  router-link:hover {
    background-color: #2980b9; /* 按钮悬停时的背景颜色 */
  }
  </style>
  