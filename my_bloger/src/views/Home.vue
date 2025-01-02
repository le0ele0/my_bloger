<template>
    <div>
      <h1>欢迎来到我的博客</h1>
      <p>这里是我的个人博客，记录我的学习与生活。</p>
      <router-link to="/blogs">查看博客列表</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  </style>
  