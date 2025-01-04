<template>
    <div class="pb-3">
        <h2 class="sub-header wrapper" id="project">Projects</h2>
        <h5 class="sub-header wrapper" style="color: #727376">Recent projects</h5>

        <div class="container wrapper" v-for="project in my_projects.slice(0, 3)" :key="project.id">
            <div class="mb-5">
                <div class="row gap row-gap-5">
                    <div class="col-12 col-md-6 col-lg-5">
                        <a :href="project.link" target="_blank">
                            <div :style="{ backgroundImage: 'url(' + require('../assets/images/' + project.background) + ')' }" class="project-image"> </div>
                        </a>
                    </div>
                    <div class="col-12 col-md-6 col-lg-7 mt-2">
                        <a :href="project.link" target="_blank">
                            <p class="work-title">{{ project.title }}</p>
                        </a>
                        <p class="about-project">{{ project.about }}</p>
                        <div class="d-flex gap-2 stack-span-container">
                            <span v-for="stack in project.stack" :key="stack.id" class="stack-span badge text-bg-secondary">{{ stack.name }}</span>
                        </div>

                        <div class="stack-span-container mt-4">
                            <a :href="project.github" target="_blank" v-if="project.github">
                                <i class="bi bi-github fs-3"></i><br>
                            </a>

                            <a :href="project.link" target="_blank" v-if="project.link">
                                <i class="bi bi-link-45deg fs-3"></i><br>
                            </a>

                            <a :href="project.video" target="_blank" v-if="project.video">
                                <i class="bi bi-file-play fs-3"></i><br>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <span class="my-4">
            View all projects in the <RouterLink to="archive" class="archive addChartreuse"> Archive</RouterLink>
        </span>
    </div>
</template>

<script setup>
import { ref } from '@vue/runtime-core'
import projects from '@/assets/files/projects.json'

let my_projects = ref(projects.works)
</script>

<style scoped>
a {
    color: white;
}

a:hover {
    color: chartreuse;
}

.wrapper {
    margin-top: 20px;
}

.about-project .stack-span {
    font-size: 15px;
}

.archive {
    margin-left: 6px;
    text-decoration: underline;
}
.work-title {
    font-size: 18px;
    max-width: fit-content;
    color: var(--higlightColor);
}

.work-title:hover{
    border-bottom: 1px solid chartreuse;
    transition: .5s ease;
    cursor: pointer;
}

@media only screen and (min-width: 1024px) {
    .wrapper {
        display: flex;
        justify-content: center;
    }
}

.stack-span-container {
    flex-wrap: wrap;
}

.stack-span {
    padding-top: 8px;
}

.sub-header {
    color: chartreuse;
}

.addChartreuse {
    color: chartreuse;
}

.about-project{
    font-size: 15px;
}

.project-image {
    background-size: cover;
    height: 200px;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
}
</style>