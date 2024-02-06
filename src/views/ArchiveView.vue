<template>
  <div id="parent">
    <WordHeader header="archive" />
    <Archive/>
  </div>
</template>

<script setup>
import Archive from '@/components/Archive.vue';
import WordHeader from '@/components/WordHeader.vue';
import { onMounted } from "vue";

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

<style>
.addChartreuse{
  color: chartreuse;
}

</style>
