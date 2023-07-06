<template>
  <div class="wrapper" id="about-intro">
    <div class="pt-5 pb-5 container text-center">

      <div class="pt-5">Hi there 👋🏽, my name is</div>
      <div class="addChartreuse name">Joshua Nweze</div>
      <div>I am a front end web developer</div>

      <div class="pt-5">
        <a href="https://joshuanwezeresume.netlify.app/resume.pdf" target="_blank"><span class="front-btn">Resume</span></a>
        <router-link to="/" @click="scrollTo"><span class="front-btn">Contact</span></router-link>
      </div>
    </div>

    <div class="pt-5 container" id="about">
      <div class="row justify-content-center container">
      
          <div class="">
            <div class="row">
              <h3 class="pt-5 sub-header">About me</h3>
              
            </div>
          </div>

        <div class="col-sm-12 col-md-8 col-lg-8 pt-2">

            <p>Hello! My name is Joshua, I am a frontend developer and I enjoy creating awesome useful things that solve problems. </p>

            <p>I've completed some projects and few for clients, some which I did personally and worked as a team. I am still on  the journey of learning and discovering new things in the world of tech.</p>

            <p>Other of my hobbies include reading, discovering and learning new things, playing computer games, movies and music.</p>

            <p>Here are technologies I work with:</p>
            <div>
              <div class="row">
                <div class="col-md-6 col-12"> 
                  <h6 class="addChartreuse">Languages</h6>
                  <ul type='circle'>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </div>
                <div class="col-md-6 col-12">
                  <h6 class="addChartreuse">Libraries &amp; Frameworks</h6>
                  <ul type='circle'>
                    <li>VueJs</li>
                    <li>NuxtJs</li>
                    <li>Bootstrap</li>
                    <li>Tailwind</li>
                  </ul>
                </div>
                <div class="col-md-6 col-12">
                  <h6 class="addChartreuse">Design</h6>
                  <ul type='circle'>
                    <li>Figma</li>
                  </ul>
                </div>
                <div class="col-md-6 col-12">
                  <h6 class="addChartreuse">Tools &amp; Platforms</h6>
                  <ul type='circle'>
                    <li>Git</li>
                    <li>VSCode</li>
                    <li>Netlify</li>
                    <li>Vite</li>
                  </ul>
                </div>
              </div>
               
            </div>

            <!-- <p>Currently, I am learning React. </p> -->
        </div>
        <div class="col-sm-12 col-md-4 col-lg-4 pt-2 text-center"><img src="../assets/images/my-img.jpeg" class="my-image" alt=""></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Aboutme",

  setup() {
    function scrollTo() {
      setTimeout(() => {
        let scrollId = document.getElementById('contact')
        scrollId.scrollIntoView()
      }, 100)
    }

    return { scrollTo }
  }
};
</script>

<style scoped>
@media only screen and (max-width: 480px) {
  /*Small smartphones [325px -> 425px]*/
  .name {
    font-size: 40px;
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

.front-link{
    border: chartreuse 1px solid;
    border-radius: 1px;
    padding: 15px 20px;
    /* margin-top: 20px; */
    background-color: transparent;
    text-decoration: none;
    /* margin-left: 10px; */
}

.hr{
  height: 15px;
  width: 300px;
  background-color: chartreuse;
  border-top: 1px solid;
}

.about{
 width: 200px;
 border-top: 2px solid burlywood;
 height: 10px;
}

.sub-header{
  color: chartreuse;
}
</style>