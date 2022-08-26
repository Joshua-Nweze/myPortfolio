<template>

  <!-- <div class="justify-contact-start">ddl,mlas , s</div> -->

<nav class="nav navbar navbar-expand-lg fixed-top" id="navbar">
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
</style>