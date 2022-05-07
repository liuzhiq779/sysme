import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout/index'
import Login from '../views/Login/Login.vue'
import Home from '../views/Home/index.vue'


//异步
const  Goods = () =>import('../views/Goods/index.vue')
const  Params = () =>import('../views/Params/index.vue')
const  Oder = () =>import('../views/Oder/index.vue')
const OderList = ()=>import('../views/Oder/OderList/index.vue')
const OderBack = ()=>import('../views/Oder/OderBack/index.vue')
const  Advert = () =>import('../views/Advert/index.vue')

Vue.use(VueRouter)

const routes = [
 {
   path:'',
   component:Layout,
   children:[
      {
        path:'/',
        name:'Home',
        component:Home
      },
      {
        path:'/Goods',
        name:'goods',
        component:Goods
      },
      {
        path:'/Params',
        name:'Params',
        component:Params
      },
      {
        path:'/Advert',
        name:'Advert',
        component:Advert
      },
      {
        path:'/Oder',
        name:'Oder',
        redirect:'/Oder/OderList',
        component:Oder,
        children:[
          {
            path:'OderList',
            name:'OderList',
            component:OderList
          },
          {
            path:'OderBack',
            name:'OderBack',
            component:OderBack
          }
        ]
      },
      
   ]
 },
 {
   path:'/login',
   name:'Login',
   component:Login
 }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
