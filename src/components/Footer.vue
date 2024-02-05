<template>
  <footer class="row py-3">
    <div class="hr"></div>
    <div class="text-center">
      &copy; {{ new Date().getFullYear() }}. Designed and built by yours truly.
    </div>
  </footer>
</template>

<script setup>
</script>

<style>
.hr {
  background-color: var(--primaryColor);
  margin-bottom: 5px;
  height: 1px;
  width: 100%;
}
</style>