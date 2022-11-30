<template>
  <div class="container pt-5 pb-5 col-lg-5 col-md-6 col-sm-12 justify-content-center" id="contact">
      <div class="row text-center">
        <h3 class="col-lg-12 text-center sub-header">Get in touch</h3>
        <div>
          I am looking for a frontend web developer role. <br>
          Send me a mail or reach out to me on twitter or linkedin and I will get back to you as soon as possible. I am looking forward to hearing from you.
          <a href="mailto:joshuanweze270@gmail.com" class="text-center d-flex justify-content-center"><div class="mt-3 send-mail"><i class="bi bi-envelope"></i> Send me an e-mail</div></a>
          <div class="pt-2">
            <a href="https://twitter.com/TheJosh_N" class="social-icon" target="_blank"><span><i class="bi bi-twitter fs-3"></i></span></a>
            <a href="https://github.com/Joshua-Nweze" class="social-icon" target="_blank"><span><i class="bi bi-github fs-3"></i></span></a>
            <a href="https://www.linkedin.com/in/joshuanweze" class="social-icon" target="_blank"><span><i class="bi bi-linkedin fs-3"></i></span></a>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Conatact"

}
</script>

<style scoped>
.send-mail{
    border: chartreuse 1px solid;
    border-radius: 1px;
    padding: 15px 20px;
    background-color: transparent;
    text-decoration: none;
    margin-left: 10px;
    width: fit-content;
    color: #727376;
}

.send-mail:hover{
  color: chartreuse;
}

.social-icon{
    margin-right: 15px;
    color: chartreuse;
}

.sub-header{
  color: chartreuse;
} 
</style>