import Vue from 'vue'
import VueRouter from 'vue-router'
import FoodAngels from '../views/angel-list.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import CreateMeal from '../views/create-meal.vue'
import browseAngel from '../views/browse-angel.vue'

Vue.use(VueRouter)

export default function init(store) {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'FoodAngels',
        component: FoodAngels,
      },
      {
        path: '/users/:id',
        name: 'AngelDetail',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/angel-detail.vue'),
      },
      {
        path: '/register',
        name: 'register',
        component: Register,
        beforeEnter(to, from, next) {
          if (store.state.user) return next('/profile')
          return next()
        }
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
        beforeEnter(to, from, next) {
          if (store.state.user) return next('/profile')
          return next()
        }
      },
      {
        path: '/browse-angel',
        name: 'browseAngel',
        component: browseAngel
      },
      {
        path: '/create-meal',
        name: 'CreateMeal',
        component: CreateMeal
      },
      {
        path: '/profile',
        name: 'profile',
        component: FoodAngels,
        beforeEnter(to, from, next) {
          if (!store.state.user) return next('/login')
          return next()
        }
      }

    ]


  })
}


