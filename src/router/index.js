import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DefaultLayout from '../layouts/default.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
          title: 'Home - Joshua Nweze'
        }
      },
      {
        path: '/experience',
        name: 'experience',
        component: () => import(/* webpackChunkName: "experience" */ '../views/ExperienceView.vue'),
        meta: {
          title: 'Experience - Joshua Nweze'
        }
      }
      ,
      {
        path: '/projects',
        name: 'projects',
        component: () => import(/* webpackChunkName: "projects" */ '../views/ProjectsView.vue'),
        meta: {
          title: 'Projects - Joshua Nweze'
        }
      }
      ,
      {
        path: '/contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue'),
        meta: {
          title: 'Contact - Joshua Nweze'
        }
      }
    ]
  },

  {
    path: '/archive',
    name: 'archive',
    component: () => import(/* webpackChunkName: "archive" */ '../views/ArchiveView.vue'),
    meta: {
      title: 'Archive - Joshua Nweze'
    }
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
