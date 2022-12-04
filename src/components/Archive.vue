<template>
    <div class="container">
        <h1 class="d-flex justify-content-center mt-5 mb-4 addChartreuse">Projects Archive</h1>

        <div class="row sub-head d-flex justify-content-center">
            <div class="col-4 col-lg-2 sub-head">Name</div>
            <div class="col-4 col-lg-2 d-none d-md-block sub-head">Year</div>
            <div class="col-4 col-lg-3 sub-head">Stack</div>
            <div class="col-4 col-lg-1 sub-head">Link(s)</div>
        </div>

        <div class="row mt-3 mb-4 d-flex justify-content-center" v-for="project in my_projects" :key="project.id">
            <div class="col-lg-2 col-4"><strong> {{ project.title }} </strong></div>
            <div class="col-lg-2 col-4 d-none d-md-block">{{ project.year }}</div>
            <div class="col-lg-3 col-4"><span v-for="stack in project.stack" :key="stack.id" class="stack-span">{{ stack.name }}</span></div>
            <div class="col-lg-1 col-4">
                <div class="row">
                    <div class="col-4">
                        <a :href="project.github" class="mt-4 link" target="_blank" v-if="project.github">
                            <i class="bi bi-github"></i><br>
                        </a>
                    </div>

                    <div class="col-4">
                        <a :href="project.link" class="mt-4 link" target="_blank" v-if="project.link">
                            <i class="bi bi-link-45deg"></i><br>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import projects from "@/assets/files/projects.json";
import { ref } from '@vue/reactivity';
export default{
    name: "Archive",
    setup(){
        let my_projects = ref(projects.works)

        return { my_projects }
    }
}
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
    font-style: bold;
}
</style>