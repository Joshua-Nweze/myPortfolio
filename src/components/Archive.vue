<template>
    <div class="container">
        <h1 class="d-flex justify-content-center mb-4 addChartreuse">Projects Archive</h1>

        <div class="row sub-head d-flex justify-content-center">
            <div class="col-9 col-md-3 col-lg-2 sub-head">Name</div>
            <div class="col-md-3 col-lg-2 d-none d-md-block sub-head">Year</div>
            <div class="col-md-3 d-none d-md-block col-lg-3 sub-head">Stack</div>
            <div class="col-3 col-md-3 col-lg-1 sub-head">Link(s)</div>
        </div>

        <div class="row mt-3 mb-4 d-flex justify-content-center" v-for="project in my_projects" :key="project.id">
            <div class="col-9 col-md-3 col-lg-2 project-detail"><strong> {{ project.title }} </strong></div>
            <div class="col-md-3 col-lg-2 d-none d-md-block">{{ project.year }}</div>
            <div class="col-md-3 col-lg-3 d-none d-md-block"><span v-for="stack in project.stack" :key="stack.id" class="stack-span project-detail">{{ stack.name }}</span></div>
            <div class="col-3 col-md-3 col-lg-1">
                <div class="row d-flex justify-content-start">
                    <div class="col-4">
                        <a :href="project.github" class="mt-4 link" target="_blank" v-if="project.github">
                            <i class="bi bi-github"></i><br>
                        </a>
                    </div>

                    <div class="col-4 ms-2">
                        <a :href="project.link" class="mt-4 link" target="_blank" v-if="project.link">
                            <i class="bi bi-link-45deg"></i><br>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import projects from "@/assets/files/projects.json";
import { ref } from '@vue/reactivity';


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
</style>