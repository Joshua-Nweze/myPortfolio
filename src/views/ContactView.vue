<template>
    <div id="parent">
        <WordHeader header="contact"/>
        <Contact />
    </div>
</template>

<script setup>
import Contact from '@/components/Contact.vue';
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

<style  scoped>

</style>