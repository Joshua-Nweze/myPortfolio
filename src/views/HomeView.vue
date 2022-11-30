<template>
  <Header />
  <Aboutme />
  <!-- <Work /> -->
  <Projects />
  <Contact />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Aboutme from '@/components/Aboutme.vue'
import Projects from '@/components/Projects.vue'
import Work from '@/components/Work.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Aboutme,
    Projects,
    Work,
    Contact,
    Footer
  }
}
</script>
