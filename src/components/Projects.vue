<template>
    <div class="container wrapper pb-5" v-for="project in my_projects" :key="project.id">
        <div class="card" style="width: 100%; ">
            <div>
                <div class="projects" >
                    <a :href="project.link" target="_blank">
                    <div class="view p-2 text-center">
                        <i class="bi bi-eye"></i><br>
                        <span class="viewtext">View</span>
                    </div>
                </a>
                <div class="project-details text-end">
                    <p class="work-title">{{ project.title }}</p>
                    <p>{{ project.about }}</p>
                    <span v-for="stack in project.stack" :key="stack.id" class="stack-span">{{stack.name}}</span> 
                </div>
                </div>
                <img :src="project.background" alt="">
                <!-- <img src="../assets/images/theme-colour.png" alt=""> -->
            </div>
        </div>
    </div>
    
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import projects from '@/assets/files/projects.json'

export default {
    name: 'Projects',
    setup() {
        let my_projects = ref(projects.works)
        // let background = ref(work.background)
        console.log(my_projects)

        return{ my_projects }
    }

}
</script>

<style scoped>
    .wrapper{
        margin-top: 20px;
        background-color: #0f2443;
    }

    .card{
        border: none;
        background-color: #0f2443;
    }

    .projects{
        background-image: url('../assets/images/my-img.jpeg');
        /* background-size: auto; */
        height: 400px;
        position: relative;
        margin-top: 50px;
        filter: grayscale(100%);
    }

    .projects:hover{
        filter: grayscale(0);
    }

    .viewtext{
        font-size: 17px;
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

   }

   @media only screen and (min-width: 481px) and (max-width: 1023px) {
        .project-details{
            position: absolute;
            top: 100px;
            left: 200px;
            right: 0;
            color: white;
            backdrop-filter: saturate(180%) blur(5px);
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

   }

   .stack-span{
    margin-left: 20px;
    display: inline-flex;  
    flex-wrap: wrap;
   }
</style>