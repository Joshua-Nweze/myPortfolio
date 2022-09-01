<template>
  <!-- <iframe src="/MY_RESUME.pdf" frameborder="0"></iframe> -->
  <!-- <vue-pdf-embed :source="pdfSource" /> -->
  <a href="resume.pdf"> clickesss</a>
  
  <iframe src="MY_RESUME.pdf" height="50%" width="100%" frameborder="0"></iframe>

  <iframe src="https://www.youtube.com/watch?v=Ll7PA0dtpW0" frameborder="0"></iframe>
  <embed src="resume.pdf" type="application/pdf">
  <div v-html="video"></div>
  <p>s</p>
</template>

<script>
import { ref } from '@vue/reactivity'
// import VuePdfEmbed from 'vue-pdf-embed'

export default {
    name: 'Pdf',
    // components: { VuePdfEmbed },
    setup(){
        // let pdfSource = ref('/MY_RESUME.pdf')

        let video = ref('<iframe src="http://www.africau.edu/images/default/sample.pdf"></iframe>')

        return{ video}
    }
}
</script>

<style>
    iframe{
        width: auto;
        height: auto;
    }
</style>