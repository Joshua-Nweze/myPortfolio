<template>
  <div class="wrapper mb-3" id="about-intro">
    <WordHeader header="home"/>
    <div class="pb-5 container text-center">

      <div class="text-start px-2 py-1 rounded-pill work-search-status">Available for work</div>

      <div>Hi there 👋🏽, my name is</div>
      <div class="addChartreuse name">Joshua Nweze</div>
      <div class="what-i-do">I am a Full-stack developer</div>

      <div class="pt-5">
        <a :href="resumeLink" target="_blank"><span class="front-btn">résumé</span></a>
        <RouterLink to="/contact"><span class="front-btn">contact</span></RouterLink>
      </div>
    </div>

    <div class="container" id="about">
      <div class="">
      
          <div class="">
            <div class="row">
              <h3 class="pt-5 sub-header">About me</h3>
              
            </div>
          </div>

        <div>

            <p>Hello there! 👋, I am a passionate Full-stack developer with an eye for creating robust and scalable websites and web applications. I enjoy using my expertise in front-end and back-end development in bringing creative ideas to life.</p>

            <p>I am still on  the journey of learning and discovering new things in the world of tech.</p>

            <p>Other of my hobbies include reading, discovering and learning new things, playing computer games, movies and music.</p>

            <p>Here are technologies I work with:</p>
            <div class="">
              <div class="mt-4">
                <span class="addChartreuse">Frontend:</span> JavaScript (ES6+), TypeScript, HTML5, CSS3, Vue.js, Nuxt.js, React.js, Next.js, State Management (Pinia, Redux), TanStack Query (Vue/React Query), Responsive Web Design, SSR & SEO Optimization
              </div>

              <div class="mt-4">
                <span class="addChartreuse">Backend:</span> Node.js, Express.js, RESTful API Design, JWT Authentication, Two-Factor Authentication (2FA), Role-Based Authorization
              </div>

              <div class="mt-4">
                <span class="addChartreuse">Databases & Backend Services:</span> PostgreSQL, MongoDB, Supabase, Firebase, Cloud Firestore, Prisma ORM, Knex.js
              </div>

              <div class="mt-4">
                <span class="addChartreuse">Styling & UI:</span> Tailwind CSS, Bootstrap, SCSS, Shadcn UI
              </div>

              <div class="mt-4">
                <span class="addChartreuse">Tools & Workflow:</span> Git, GitHub, GitLab, Postman, CI/CD, Netlify, Vercel, Render
              </div>
            </div>

            <!-- <p>Currently, I am learning React. </p> -->
        </div>
        <!-- <div class="col-sm-12 col-md-4 col-lg-4 pt-2 text-center"><img src="../assets/images/my-img.jpeg" class="my-image" alt=""></div> -->
      </div>
    </div>

  </div>
</template>

<script setup>
import WordHeader from './WordHeader.vue';

let resumeLink = process.env.VUE_APP_RESUME_LINK
</script>

<style scoped>
@media only screen and (max-width: 480px) {
  /*Small smartphones [325px -> 425px]*/
  .name {
    font-size: 40px;
  }
  .what-i-do {
    font-size: 25px;
  }

  .my-image{
    width: 240px;
    height: 250px;
    filter: grayscale(100%);
    
  }

   .my-image:hover{
    filter: none;
  }

}

@media only screen and (min-width: 481px) and (max-width: 1023px) {
 
  .name {
    font-size: 60px;
  }
  .what-i-do {
    font-size: 30px;
  }

  .my-image{
    width: 260px;
    height: 270px;
    margin: auto;
    filter: grayscale(100%);
  }

   .my-image:hover{
    filter: none;
  }
}

@media only screen and (min-width: 1024px) {
  .name {
    font-size: 80px;
  }
  .what-i-do {
    font-size: 40px;
  }


  .my-image{
    width: 300px;
    height: 320px;
    filter: grayscale(100%);
    /* float: left; */
  }

  .my-image:hover{
    filter: none;
  }
}

* {
  color: #727376;
}

.wrapper {
  background-color: #0f2443;
}

.addChartreuse {
  color: chartreuse;
}

.front-btn{
    border: chartreuse 1px solid;
    border-radius: 1px;
    padding: 15px 20px;
    background-color: transparent;
    text-decoration: none;
    margin-left: 10px;
}

.front-btn:hover{
    color: chartreuse;
}

.sub-header{
  color: chartreuse;
}

.work-search-status {
  max-width: fit-content;
  background-color: #173125;
  color: chartreuse;
  margin-bottom: 10px;
  font-size: 14px;
}
</style>
