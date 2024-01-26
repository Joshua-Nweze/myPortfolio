<template>
  <div class="pb-5" id="work">
    <h3 class="sub-header">Work</h3>
    <h5 class="mb-4">Where I have worked</h5>

    <div class="row justify-content-center text-start mt-3">
      <div class="col-md-3 col-sm-12">
          <div class="nav outer" id="nav-tab" name="tablist">
              <span class="nav-link active" id="nav-job1-tab" data-bs-toggle="tab" data-bs-target="#nav-job1" type="button" name="tab" aria-controls="nav-job1" aria-selected="true">Mexygabriel</span>
              <span class="nav-link" id="nav-job2-tab" data-bs-toggle="tab" data-bs-target="#nav-job2" type="button" name="tab" aria-controls="nav-job2" aria-selected="false">Chibex Technologies</span>
          </div>
      </div>
     
      <div class="col-md-9">
          <div class="tab-content" id="nav-tabContent">
              <!-- job1 -->
              <div class="tab-pane fade show active" id="nav-job1" name="tabpanel" aria-labelledby="nav-job1-tab" tabindex="0">
                  Intern Frontend developer <span class="addChartreuse">at Mexygabriel</span> <br>
                  <span class="date">Jan 2023 - Present</span>

                  <div class="mt-3">
                    <ul>
                      <li>Used HTML, CSS, JavaScript and frontend frameworks to build top-quality code for diverse projects.</li>
                      <li>Created clean, well-documented custom code and updates.</li>
                      <li>Debugged websites to identify and resolve potential problems.</li>
                      <li>Worked with designers, other developers and project managers in building ideas into reality for clients</li>
                    </ul>
                  </div>
              </div>
              <!-- job2 -->
              <div class="tab-pane fade" id="nav-job2" name="tabpanel" aria-labelledby="nav-job2-tab" tabindex="0">
                Intern Junior frontend developer <span class="addChartreuse">at Chibex technologies</span> <br>
                  <span class="date">July 2021 - Dec 2021</span>

                  <div class="mt-3">
                    <ul>
                      <li>Used HTML, CSS, Bootstrap, and JavaScript to design, build and maintain websites.</li>
                      <li>Worked with UI/UX designers and backend developers to create stunning websites.</li>
                    </ul>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Work",

}
</script>

<style scoped>
@media only screen and (max-width: 768px) {
  .outer {
      width: 100%;
      display: flex;
      flex-flow: row;
      flex-wrap: nowrap;
      overflow: scroll;
  }

  .outer span {
      width: auto;
      display: inline;
      white-space: nowrap;
  }

  .tab-content{
    margin-top: 10px;
  }
}

.nav-link{
  background-color: #0f2443 !important;
  color: #727376;
  width: 100%;
}

.contact:hover{
    color: chartreuse;
}

.sub-header{
  color: chartreuse;
}

.nav-link.active{
  color: chartreuse;
}

.date{
  font-size: 15px
}

::-webkit-scrollbar {
  width: 4px;
  background-color: #0f2443;
  height: 5px;
}
 
::-webkit-scrollbar-thumb {
  background: chartreuse; 
  border-radius: 10px;
  height: 1px;
}

::-webkit-scrollbar-corner {
  display: none;
}
</style>