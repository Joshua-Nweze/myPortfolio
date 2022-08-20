<template>
  <Header />
  <Aboutme />
  <Projects />
  <Work />
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Aboutme from '@/components/Aboutme.vue'
import Projects from '@/components/Projects.vue'
import Work from '@/components/Work.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Aboutme,
    Projects,
    Work
  }
}
</script>
