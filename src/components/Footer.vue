<template>
  <footer class="container text-center row">
    <div class="hr"></div>
    &copy; {{ new Date().getFullYear() }}. Designed and built by yours truly.
  </footer>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    name: "Footer",

}
</script>

<style>
.hr {
  background-color: var(--primaryColor);
  margin-bottom: 5px;
  height: 1px;
  width: 100%;
}
</style>