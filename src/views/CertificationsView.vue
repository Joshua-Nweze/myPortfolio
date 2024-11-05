<template>
    <div id="parent" >
        <WordHeader header="certifications" />
        
        <div class="pb-3">
            <h2 class="sub-header wrapper addChartreuse text-center" id="project">Certifications</h2>

            <div class="container mt-5">
                <div class="mb-5">
                    <div class="row gap row-gap-5">
                        <div class="col-12 col-md-6 col-lg-5">
                            <a target="_blank">
                                <img src="../assets/images/freeCodeCampjs.png" alt="">
                            </a>
                        </div>
                        <div class="col-12 col-md-6 col-lg-7 mt-2">
                            <a target="_blank">
                                <p class="ceertificate-title">Lagacy JavaScript Algorithms and Data Structures</p>
                            </a>
                            <p class="certificate-date">April, 2023</p>

                            <div>
                                <a href="https://www.freecodecamp.org/certification/fcc7faa729c-9b86-461e-898b-8fb37ea7993c/javascript-algorithms-and-data-structures" target="_blank">
                                    <i class="bi bi-link-45deg fs-3"></i><br>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup>
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
.addChartreuse {
  color: chartreuse;
}

img{
    height: 100%;
    width: 100%;
}

.certificate-date {
    font-size: 15px;
}
</style>
