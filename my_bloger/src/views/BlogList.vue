<template>
    <div>
      <h1>博客列表</h1>
      <ul>
        <li v-for="blog in blogs" :key="blog.id">
          <router-link :to="`/blogs/${blog.id}`">{{ blog.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlogList',
    data() {
      return {
        blogs: [
          { id: 1, title: '我的第一篇博客' },
          { id: 2, title: '学习 Vue.js 的心得' },
          { id: 3, title: 'JavaScript 高级技巧' },
        ],
      };
    },
  };
  </script>
  