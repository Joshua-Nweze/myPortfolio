<template>
    <div id="parent" >
        <WordHeader header="projects" />
        <Projects />
    </div>
</template>

<script setup>
import Projects from "@/components/Projects.vue";
import WordHeader from "@/components/WordHeader.vue";
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

<style scoped>
</style>
