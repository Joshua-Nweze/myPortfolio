<template>
    <div id="parent" class="archive-container pb-3">
        <WordHeader header="archive" class="mt-n1" />
        <Archive />
    </div>
</template>

<script setup>
import Archive from "@/components/Archive.vue";
import WordHeader from "@/components/WordHeader.vue";
import { onMounted } from "vue";

function scrollTo(id) {
    setTimeout(() => {
        let scrollId = document.getElementById(id);
        scrollId.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
}

onMounted(() => {
    scrollTo("parent");
});
</script>

<style>
.addChartreuse {
    color: chartreuse;
}

@media (min-width: 992px) {
    .archive-container {
        margin: 0 150px;
    }
}

@media (max-width: 767px) {
    .mt-n1 {
        margin-top: -3rem !important;
    }
}
</style>
