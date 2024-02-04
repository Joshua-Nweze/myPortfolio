<template>
<nav class="nav navbar navbar-expand-lg fixed-top d-lg-none" id="navbar" >
  <div class="container">
    <RouterLink to="/" class="navbar-brand nav-link addChartreuse">JN</RouterLink>

    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span><i class="bi bi-list-nested"></i></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <div class="navitems">
        <ul class="navbar-nav justify-content-end">
        <li class="nav-item">
          <div class="nav-link addChartreuse" @click="navigateTo('/')" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">about</div>
        </li>
        <li class="nav-item">
          <div class="nav-link addChartreuse" @click="navigateTo('/experience')" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">experience</div>
        </li>
        <li class="nav-item">
          <div class="nav-link addChartreuse" @click="navigateTo('/projects')" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">projects</div>
        </li>
        <li class="nav-item">
          <div class="nav-link addChartreuse" @click="navigateTo('/contact')" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">contact</div>
        </li>
        <li class="nav-item resume ml-5 mr-5">
          <a class="nav-link addChartreuse" href="https://drive.google.com/file/d/1fTUOZ9ag1EYdyvWvfeeBWFmo_I_uf4fC/view?usp=sharing" target="_blank">resume</a>
        </li>
      </ul>
      </div>
      
    </div>
  </div>
</nav>
</template> 

<script setup>
import { useRouter } from 'vue-router';

let router = useRouter()

function navigateTo(route) {
	router.push(route)
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
    transition: 0.3s ease-in;
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