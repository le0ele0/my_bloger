<template>
    <header>
      <nav>
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于我</router-link>
        <router-link to="/blogs">博客</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
  
  <style scoped>
  header {
    background-color: #42b983;
    padding: 1rem;
  }
  nav a {
    margin: 0 10px;
    color: white;
    text-decoration: none;
  }
  </style>
  