<template>
    <h2 class="sub-header pt-5 container wrapper" id="project">Projects</h2>
    <h5 class="sub-header container wrapper" style="color: #727376">Recent projects</h5>
    <div class="container wrapper" v-for="project in my_projects.slice(0, 3)" :key="project.id" >
        <div class="card projects col-lg-9" :style="{backgroundImage: 'url(' + require('../assets/images/' + project.background) + ')'}" >
            <div>
                <div>
                    <!-- <a :href="project.link" target="_blank">
                        <div class="view p-2 text-center">
                            <i class="bi bi-link-45deg"></i><br>
                            <span class="viewtext">View</span>
                        </div>
                    </a>

                    <a :href="project.github" target="_blank">
                        <div class="github-view p-2 text-center">
                            <i class="bi bi-github"></i><br>
                            <span class="viewtext">Github</span>
                        </div>
                    </a> -->

                    <div class="project-details text-end">
                        <p class="work-title">{{ project.title }}</p>
                        <p class="abour-project">{{ project.about }}</p>
                        <span v-for="stack in project.stack" :key="stack.id" class="stack-span">{{stack.name}}</span> 
                        <br>
                        
                        <span>
                            <a :href="project.github" class="stack-span mt-4" target="_blank" v-if="project.github">
                                <i class="bi bi-github"></i><br>
                            </a>
                        
                            <a :href="project.link" class="stack-span mt-4" target="_blank" v-if="project.link">
                                <i class="bi bi-link-45deg"></i><br>
                            </a>
                        </span>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    <span class="d-flex justify-content-center mt-4 mb-5">View all projects in the <router-link to="/archive" class="archive addChartreuse"> Archive</router-link></span> 
    
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import projects from '@/assets/files/projects.json'

export default {
    name: 'Projects',
    setup() {
        let my_projects = ref(projects.works)

        return{ my_projects }
    }

}
</script>

<style scoped>
    a{
        color: white;
    }

    a:hover{
        color: chartreuse;
    }

    .wrapper{
        margin-top: 20px;
        background-color: #0f2443;
    }

    .card{
        border: none;
        background-color: #0f2443;
    }

    .projects{
        background-size: auto;
        background-repeat: no-repeat;
        object-fit: contain;
        /* opacity: 0.2; */
        height: 400px;
        position: relative;
        margin-top: 50px;
        filter: grayscale(100%);
        /* backdrop-filter: blur(5px); */
    }

    .projects:hover{
        filter: none;
    }

    .about-project .stack-span{
        font-size: 15px;
    }

    .viewtext{
        font-size: 17px;
        opacity: 1;
    }

    .archive{
        margin-left: 6px;
        text-decoration: underline;
    }

    @media only screen and (max-width: 480px) {
        .project-details{
            position: absolute;
            /* top: 100px;
            left: 200px; */
            color: white;
            backdrop-filter: saturate(180%) blur(5px);
            border: 1px solid green;
            height: 100%;
            padding-top: 100px;
            padding-right: 10px;
        }

        .work-title{
            font-size: 20px;
        }
        
        .view{
            position: absolute;
            top: 5px;
            right: 10px;
            color: white;
            font-size: 20px;
            line-height: 10px;
            backdrop-filter: blur(5px);
            border: 1px solid green;
            z-index: 999;
        }

        .github-view{
            position: absolute;
            top: 5px;
            right: 80px;
            color: white;
            font-size: 20px;
            line-height: 10px;
            backdrop-filter: blur(5px);
            border: 1px solid green;
            z-index: 999;
        }

   }

   @media only screen and (min-width: 481px) and (max-width: 1023px) {
        .project-details{
            position: absolute;
            top: 80px;
            left: 180px;    
            right: 0;
            color: white;
            backdrop-filter: saturate(180%) blur(5px) ;
            border: 1px solid green;
            padding: 10px;
        }

        .work-title{
            font-size: 25px;
        }
        
        .view{
            position: absolute;
            top: 5px;
            right: 20px;
            color: white;
            font-size: 40px;
            line-height: 10px;
            backdrop-filter: blur(5px);
            border: 1px solid green;
            z-index: 999;
        }

        .github-view{
            position: absolute;
            top: 5px;
            right: 80px;
            color: white;
            font-size: 40px;
            line-height: 10px;
            backdrop-filter: blur(5px);
            border: 1px solid green;
            z-index: 999;
        }

   }

   @media only screen and (min-width: 1024px) {
         .project-details{
            position: absolute;
            top: 100px;
            right: 0;
            left: 300px;
            color: white;
            backdrop-filter: saturate(180%) blur(5px);
            border: 1px solid green;
            padding: 20px;
        }

        .wrapper{
            display: flex;
            justify-content: center;
        }

        .work-title{
            font-size: 30px;
        }
        
        .view{
            position: absolute;
            top: 5px;
            right: 20px;
            color: white;
            font-size: 40px;
            line-height: 10px;
            backdrop-filter: blur(5px);
            border: 1px solid green;
            z-index: 999;
        }

        .github-view{
            position: absolute;
            top: 5px;
            right: 80px;
            color: white;
            font-size: 40px;
            line-height: 10px;
            backdrop-filter: blur(5px);
            border: 1px solid green;
            z-index: 999;
        }

   }

   .stack-span{
        margin-left: 20px;
        display: inline-flex;  
        flex-wrap: wrap;
   }

   .sub-header{
        color: chartreuse;
    }

    .addChartreuse{
        color: chartreuse;
    }
</style>