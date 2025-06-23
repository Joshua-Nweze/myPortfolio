<template>
  <div class="pb-5" id="work">
    <h3 class="sub-header">Experience</h3>
    <h5 class="mb-4">Where I have worked</h5>

    <div class="row justify-content-center text-start mt-3">
      <div class="col-md-3 col-sm-12">
          <div class="nav outer" id="nav-tab" name="tablist">
            <span 
              v-for="(experience, index) in workExperience"
              :key="index"
              @click="setCurrentWorkExperience(index)"
              class="nav-link border-end"
              :class="[currentWorkExperience == index ? 'active' : '']" 
              :id="`nav-job-${index}-tab`" 
              data-bs-toggle="tab" 
              :data-bs-target="`#nav-job-${index}`" 
              type="button" 
              name="tab" 
              :aria-controls="`nav-job-${index}`" 
              aria-selected="true"
            >
              {{ experience.shortName ? experience.shortName : experience.workPlace }}
            </span>
          </div>
      </div>
     
      <div class="col-md-9">
          <div class="tab-content" id="nav-tabContent">
              <div 
                v-for="(experience, index) in workExperience"
                :key="index"
                class="tab-pane fade"
                :class="[currentWorkExperience == index ? 'active show' : '']"  
                :id="`nav-job-${index}`" 
                name="tabpanel" 
                :aria-labelledby="`nav-job-${index}-tab`" 
                tabindex="0"
              >
                <div v-for="role in experience.roles">
                  <div>{{ role.role }} at <span class="addChartreuse">{{ experience.workPlace }}</span></div>
                  <div class="date">{{ role.date }}</div>
                </div>

                <div class="mt-3">
                  <ul>
                    <li v-for="description in experience.descriptions">{{ description }}</li>
                  </ul>
                </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import experience from '@/assets/jsonFiles/workExperience.json'
import { ref } from '@vue/runtime-core'

let workExperience = ref(experience.workExperience)
let currentWorkExperience = ref(0)

function setCurrentWorkExperience(index) {
  currentWorkExperience.value = index
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