<template>
  <!-- <Header /> -->
  <Archive />
  <div class="footer-div">
    <Footer />
  </div>
  
</template>

<script>
import Archive from '@/components/Archive.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: "ArchiveView",
  components: {
    Archive,
    Header,
    Footer
  },
  setup() {},
}
</script>

<style scoped>
.footer-div{
  margin-top: 200px;
}
</style>
