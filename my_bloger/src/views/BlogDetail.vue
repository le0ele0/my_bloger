<template>
    <div>
      <h1>博客详情</h1>
      <p>博客 ID：{{ $route.params.id }}</p>
      <p>这里是博客的具体内容。</p>
      <router-link to="/blogs">返回博客列表</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlogDetail',
  };
  </script>
  