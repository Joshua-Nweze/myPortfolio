<template>
    <div class="container">
        <RouterLink to="/" class="addChartreuse backToPortfolio">
            <i class="bi bi-arrow-left-short backIcon"></i>
            <span>Joshua Nweze</span>
        </RouterLink>
        <h1 class="d-flex mb-4 text-gray">Projects Archive</h1>

        <div class="row text-gray">
            <div class="col-8 col-md-4  sub-head">Name</div>
            <div class="col-md-1 d-none d-md-block sub-head">Year</div>
            <div class="col-md-4 d-none d-md-block sub-head">Stack</div>
            <div class="col-4 col-md-3 sub-head">Link(s)</div>
        </div>

        <div class="row mt-3 mb-4 d-flex justify-content-center" v-for="project in my_projects" :key="project.id">
            <div class="col-8 col-md-4 project-detail text-gray"><strong> {{ project.title }} </strong></div>
            <div class="col-md-1 d-none d-md-block">{{ project.year }}</div>
            <div class="col-md-4 d-none d-md-block"><span v-for="stack in project.stack" :key="stack.id" class="stack-span badge text-bg-secondary project-detail">{{ stack.name }}</span></div>
            <div class="col-4 col-md-3">
                <div class="row d-flex justify-content-start align-items-center">
                    <a :href="project.github" class="link" target="_blank" v-if="project.github">
                        <i class="bi bi-github fs-3"></i><br>
                    </a>

                    <a :href="project.link" class="link" target="_blank" v-if="project.link">
                        <i class="bi bi-link-45deg fs-3"></i><br>
                    </a>

                    <a :href="project.video" class="link" target="_blank" v-if="project.video">
                        <i class="bi bi-file-play fs-3"></i><br>
                    </a>                    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import projects from "@/assets/files/projects.json";
import { ref } from '@vue/reactivity';
import { RouterLink } from "vue-router";


let my_projects = ref(projects.works)
</script>

<style scoped>
.stack-span{
    margin: 0 5px;
    display: inline-flex;
    flex-wrap: wrap;
}

.link{
    color: #727376;
}
.link:hover{
    color: chartreuse;
}

.sub-head{
    margin-bottom: 10px;
    font-size: 21px;
    font-weight: bold;
}

.project-detail{
    word-wrap: break-word;
}

.text-gray {
    color: rgb(228, 226, 226)
}

.backToPortfolio:hover{
    .backIcon{
        transition: .3s ease;
        padding-right: 10px;
        padding-left: 0;
    }
}

.backIcon{
    padding-left: 10px;
    transition: .3s ease;
}
</style>