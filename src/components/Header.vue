<template>

  <!-- <div class="justify-contact-start">ddl,mlas , s</div> -->

<nav class="nav navbar navbar-expand-lg fixed-top" id="navbar" >
  <div class="container">
    <a class="navbar-brand nav-link addChartreuse" href="#">JN</a>

    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span><i class="bi bi-list-nested"></i></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <div class="navitems">
        <ul class="navbar-nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link addChartreuse" aria-current="page" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link addChartreuse" href="#project">Project</a>
        </li>
        <li class="nav-item">
          <a class="nav-link addChartreuse" href="#contact">Contact</a>
        </li>
        <li class="nav-item resume ml-5 mr-5">
          <a class="nav-link addChartreuse" href="resume.pdf" type="pdf">Resume</a>
          <!-- <a href="resume.pdf" target="_blank" rel="noopener noreferrer">res</a> -->
        </li>
      </ul>
      </div>
      
    </div>
  </div>
</nav>
</template> 

<script>
import { ref } from '@vue/reactivity';
export default {
  name: 'Header',
  setup() {
    let lastScrollY = ref(window.scrollY);


    window.addEventListener('scroll', () => {
      if (lastScrollY > window.scrollY) {
        navbar.style.top = "0"
      } else if (lastScrollY < window.scrollY) {
        navbar.style.top = "-70px"
      }

      lastScrollY = window.scrollY
    })

    window.addEventListener('click', () => {
      document.getElementById("navbarNavDropdown").classList.remove("show");
    })

    return { lastScrollY }

  }


}
</script>

<style scoped>
  nav{
    text-align: center;
    background-color: #0a192f;
  }

  .navbar{
    transition: 0.5s;
    /* position: fixed; */
  }

  .navbar-brand{
    font-size: 30px;
  }

  .navitems{
    margin-left: auto;
  }

  .addChartreuse{
     color: chartreuse
  }

  .navbar-toggler{
    /* border-color: chartreuse;   */
    /* color: chartreuse; */
    border: none;
  }
  
  .bi{
    color: chartreuse !important;
  }

  .resume{
    border: 1px solid chartreuse;
    padding: 0 10px;
    /* margin: 0 40px; */
  }

  .resume:hover{
    background-color: rgb(24, 48, 1);
  }

  @media only screen and (max-width: 480px) {
    .resume{
      border: 1px solid chartreuse;
      padding: 0 10px;
      margin: 0 50px;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 1023px) {
    .resume{
      border: 1px solid chartreuse;
      padding: 0 10px;
      margin: 0 200px;
    }
  }
</style>