<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  
  font-family: 'Special Elite', 'cursive';
  background-color: #0f2443;
  color: #727376;
  overflow-x: hidden;
  font-size: 17px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

a{
  text-decoration: none;
}

::-webkit-scrollbar {
  width: 4px;
  background-color: #0f2443;
}
 
::-webkit-scrollbar-thumb {
  background: chartreuse; 
  border-radius: 10px;
  height: 10px;
}

</style>
