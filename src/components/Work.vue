<template>
  <div class="pb-5" id="work">
    <h3 class="sub-header">Experience</h3>
    <h5 class="mb-4">Where I have worked</h5>

    <div class="row justify-content-center text-start mt-3">
      <div class="col-md-3 col-sm-12">
          <div class="nav outer" id="nav-tab" name="tablist">
            <span class="nav-link active border-end" id="nav-job5-tab" data-bs-toggle="tab" data-bs-target="#nav-job5" type="button" name="tab" aria-controls="nav-job5" aria-selected="true">Hi Medicare</span>
            <span class="nav-link border-end" id="nav-job4-tab" data-bs-toggle="tab" data-bs-target="#nav-job4" type="button" name="tab" aria-controls="nav-job4" aria-selected="true">Chigisoft</span>
            <span class="nav-link border-end" id="nav-job3-tab" data-bs-toggle="tab" data-bs-target="#nav-job3" type="button" name="tab" aria-controls="nav-job3" aria-selected="true">TCMP</span>
            <span class="nav-link border-end" id="nav-job2-tab" data-bs-toggle="tab" data-bs-target="#nav-job2" type="button" name="tab" aria-controls="nav-job2" aria-selected="true">Mexygabriel</span>
            <span class="nav-link border-end" id="nav-job1-tab" data-bs-toggle="tab" data-bs-target="#nav-job1" type="button" name="tab" aria-controls="nav-job1" aria-selected="false">Chibex Technologies</span>
          </div>
      </div>
     
      <div class="col-md-9">
          <div class="tab-content" id="nav-tabContent">
              <!-- job4 -->
              <div class="tab-pane fade show active" id="nav-job5" name="tabpanel" aria-labelledby="nav-job5-tab" tabindex="0">
                <div>Full Stack developer at <span class="addChartreuse">Hi Medicare</span></div>
                  <div class="date">November 2024 - Present</div>
                  <div class="mt-3">
                    <ul>
                      <li>Hi Medicare is a teleheath platform that is basically used for storing patient medical records, prescriptions, and for connecting users to health care provoders</li>
                      <li>I worked as a Full Stack developer in the Hi Medicare Team</li>
                      <li>I worked on the dashboard with Nuxt, TypeScript, Supabase, Postgres</li>
                      <li>I worked on series of features on the platform</li>
                    </ul>
                  </div>
              </div>
              <!-- job4 -->
              <div class="tab-pane fade" id="nav-job4" name="tabpanel" aria-labelledby="nav-job4-tab" tabindex="0">
                <div>Frontend developer (contract) at <span class="addChartreuse">Chigisoft</span></div>
                  <div class="date">November 2024 - Present</div>
                  <div class="mt-3">
                    <ul>
                      <li>Worked with Backend developers, product designers, and project manageres on series of projects</li>
                    </ul>
                  </div>
              </div>
              <!-- job3 -->
              <div class="tab-pane fade show" id="nav-job3" name="tabpanel" aria-labelledby="nav-job3-tab" tabindex="0">
                <div>Full Stack developer (contract) at <span class="addChartreuse">TCMP (Total Care Management Platform)</span></div>
                  <div class="date">March 2024 - April 2024</div>
                  <div class="mt-3">
                    <ul>
                      <li>TCMP is a teleheath platform that connects users to doctors</li>
                      <li>I worked as a Full Stack developer in a team of five</li>
                      <li>Re-build TCMP website and dashboard with VueJs, NodeJs, ExpressJs, Knex, Supabase, Postgres</li>
                      <li>I worked on series of features on the platform</li>
                    </ul>
                  </div>
              </div>
              <!-- job2 -->
              <div class="tab-pane fade" id="nav-job2" name="tabpanel" aria-labelledby="nav-job2-tab" tabindex="0">
                  <div>
                    <div>Intern Full Stack developer at <span class="addChartreuse">Mexygabriel</span></div>
                    <div class="date">August 2023 - December 2023</div>
                  </div>

                  <div class="mt-3">
                    <div>Intern Frontend developer at <span class="addChartreuse">Mexygabriel</span></div>
                    <div class="date">January 2023 - July 2023</div>
                  </div>

                  <div class="mt-3">
                    <ul>
                      <li>Wrote frontend and backend code for projects.</li>
                      <li>Created clean, well-documented custom code and updates.</li>
                      <li>Debugged websites to identify and resolve potential problems.</li>
                    </ul>
                  </div>
              </div>
              <!-- job1 -->
              <div class="tab-pane fade" id="nav-job1" name="tabpanel" aria-labelledby="nav-job1-tab" tabindex="0">
                <div>Intern Junior frontend developer at <span class="addChartreuse">Chibex technologies</span></div>
                  <div class="date">July 2021 - December 2021</div>

                  <div class="mt-3">
                    <ul>
                      <li>Used HTML, CSS, JavaScript, and frontend frameworks to build top-quality code for diverse projects.</li>
                    </ul>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  color: #727376;
  width: 100%;
}

.sub-header{
  color: chartreuse;
}

.nav-link.active{
  color: chartreuse;
  background: rgba(128, 255, 0, 0.257);
}

.date{
  font-size: 15px
}

::-webkit-scrollbar {
  width: 4px;
  background-color: var(--backGround);
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

li::marker {
  /* list-style: disc; */
  color: chartreuse
}
.addChartreuse{
  color: chartreuse;
}
</style>