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
          <RouterLink class="nav-link addChartreuse" to="/">About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link addChartreuse" to="/experience">Experience</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link addChartreuse" to="/projects">Projects</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link addChartreuse" to="/contact">Contact</RouterLink>
        </li>
        <li class="nav-item resume ml-5 mr-5">
          <a class="nav-link addChartreuse" href="https://docs.google.com/document/d/1FD99zSu8V0ckXwexyiFC5VMYyzY0oyZfSeWcE_xzGDs/edit?usp=sharing" target="_blank">Resume</a>
        </li>
      </ul>
      </div>
      
    </div>
  </div>
</nav>
</template> 

<script setup>
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