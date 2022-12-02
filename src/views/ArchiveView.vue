<template>
  <Header />
  <!-- <div class="mt-4">
    <router-link class="bk-to-home" to="/">Back to home</router-link>
  </div> -->
  <div class="archive">
    <Archive/>
  </div>
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

<style>
.footer-div{
  margin-top: 200px;
}

.archive{
  margin-top: 100px;
}

.bk-to-home{
  margin: 20px 0 0 20px;
  color: #727376 !important;
}
.bk-to-home:hover{
  color: chartreuse !important;
}

.addChartreuse{
  color: chartreuse;
}

/* @media only screen and (max-width: 480px) {
  .archive{
  margin-top: 30px;
  }
} */

</style>
