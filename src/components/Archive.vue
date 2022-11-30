<template>
    <div class="container">
        <h3 class="d-flex justify-content-center mt-5">Projects Archive</h3>

        <div class="row sub-head">
            <div class="col-4 sub-head">Project name</div>
            <div class="col-4 sub-head">Stack</div>
            <div class="col-4 sub-head">Link(s)</div>
        </div>

        <div class="row mt-3 mb-4" v-for="project in my_projects" :key="project.id">
            <div class="col-4">{{ project.title }}</div>
            <div class="col-4"><span v-for="stack in project.stack" :key="stack.id" class="stack-span">{{ stack.name }}</span></div>
            <div class="col-lg-1 col-2">
                <div class="row">
                    <div class="col-6">
                        <a :href="project.github" class="mt-4 link" target="_blank" v-if="project.github">
                            <i class="bi bi-github"></i><br>
                        </a>
                    </div>

                    <div class="col-6">
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
    text-decoration: underline;
}
</style>