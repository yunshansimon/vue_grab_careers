import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import HomePage from './components/HomePage.vue'
import JobsPage from './components/JobsPage.vue'
import ContactPage from './components/ContactPage.vue'
import TeamsPage from './components/TeamsPage.vue'


Vue.use(Router)

let router = new Router()

router.redirect({
  '/':'/home'
})

router.map({
    '/home': {
        component:HomePage
    },
    '/jobs':{
        component:JobsPage
    },
    '/contact':{
        component:ContactPage
    },
    '/teams':{
        component:TeamsPage
    }
})

router.start(App, '#app')