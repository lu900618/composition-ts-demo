<template>
  <div id="app">
    <router-link to="counter">计数器</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
    <router-link to="todo">待办</router-link>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
