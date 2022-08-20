<template>
  <iframe src="/MY_RESUME.pdf" frameborder="0"></iframe>
  <!-- <vue-pdf-embed :source="pdfSource" /> -->
  <p>s</p>
</template>

<script>
import { ref } from '@vue/reactivity'
// import VuePdfEmbed from 'vue-pdf-embed'

export default {
    name: 'Pdf',
    // components: { VuePdfEmbed },
    setup(){
        let pdfSource = ref('/MY_RESUME.pdf')

        return{pdfSource}
    }
}
</script>

<style>
    iframe{
        width: auto;
        height: auto;
    }
</style>