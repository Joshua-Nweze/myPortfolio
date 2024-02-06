<template>
  <div id="parent">
    <Aboutme />
  </div>
  <Footer />
</template>

<script setup>
import Aboutme from '@/components/Aboutme.vue';
import { onMounted } from 'vue';

function scrollTo(id) {
    setTimeout(() => {
        let scrollId = document.getElementById(id);
        scrollId.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
}

onMounted(() => {
    scrollTo("parent");
});
</script>

<style scoped>
</style>
