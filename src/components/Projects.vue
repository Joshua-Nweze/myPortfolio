<template>
    <div class="pb-5">
        <h2 class="sub-header wrapper" id="project">Projects</h2>
        <h5 class="sub-header wrapper" style="color: #727376">Recent projects</h5>
        <div class="container wrapper" v-for="project in my_projects.slice(0, 3)" :key="project.id">
            <div class="col-lg-9 mb-5">
                <div class="row">
                    <div class="col-3">
                        <div :style="{ backgroundImage: 'url(' + require('../assets/images/' + project.background) + ')' }" class="project-image"> </div>
                    </div>
                    <div class="col-9">
                        <p class="work-title">{{ project.title }}</p>
                        <p class="about-project">{{ project.about }}</p>
                        <span v-for="stack in project.stack" :key="stack.id" class="stack-span badge text-bg-secondary">{{ stack.name }}</span>

                        <div>
                            <a :href="project.github" class="stack-span" target="_blank" v-if="project.github">
                                <i class="bi bi-github"></i><br>
                            </a>

                            <a :href="project.link" class="stack-span" target="_blank" v-if="project.link">
                                <i class="bi bi-link-45deg"></i><br>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <span class="d-flex justify-content-center mt-4 mb-5">View all projects in the <RouterLink to="projects/archive"
                class="archive addChartreuse"> Archive</RouterLink></span>
    </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import projects from '@/assets/files/projects.json'

export default {
    name: 'Projects',
    setup() {
        let my_projects = ref(projects.works)

        return { my_projects }
    }

}
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
    background-color: #0f2443;
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
    color: var(--higlightColor);
}

@media only screen and (min-width: 1024px) {
    .wrapper {
        display: flex;
        justify-content: center;
    }
}

.stack-span {
    margin-left: 10px;
    display: inline-flex;
    flex-wrap: wrap;
    padding-top: 8px;
    margin-bottom: 10px;
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
    height: 60px;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
}
</style>