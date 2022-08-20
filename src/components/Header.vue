<template>

  <!-- <div class="justify-contact-start">ddl,mlas , s</div> -->

<nav class="nav navbar navbar-expand-lg" id="navbar">
  <div class="container">
    <a class="navbar-brand nav-link addChartreuse" href="#">JN</a>

    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span><i class="bi bi-list-nested"></i></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <div class="navitems">
        <ul class="navbar-nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link addChartreuse" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link addChartreuse" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link addChartreuse" href="#">Pricing</a>
        </li>
      </ul>
      </div>
      
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Header',


}
</script>

<style scoped>
  nav{
    text-align: center;
    background-color: #0a192f;
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