import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import inscription from '../views/SignUp';
import connectionVue from '../views/Connexion';
import PostsVue from '../views/Posts';
import test from '../views/test';

/* const routes = [
  {
    path: '/acceuil',
    name: 'acceuil',
    component: () => import('../components/Acceuil')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test')
  },
  
] */

const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/',
      name: 'inscription',
      component: inscription
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsVue
    }, 
    {
      path: '/connexion',
      name: 'connexion',
      component: connectionVue
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
  ]
})

export default router
