import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Goods from '@/views/Goods'
import Cart from '@/views/Cart'
import Kinds from '@/views/Kinds'
import My from '@/views/My'
import Search from '@/views/Search'
import Login from '@/views/Login'
import Register from '@/components/Login/Register'

import Home from '@/pages/Home'

import swiper from '../components/Index/Swiper'
import homeone from '../components/Index/Homeone'
import hometwo from '../components/Index/Hometwo'
import homethree from '../components/Index/Homethree'
import homefour from '../components/Index/Homefour'
import homefive from '../components/Index/Homefive'
import homesix from '../components/Index/Homesix'
import homeseven from '../components/Index/Homeseven'
import homeeight from '../components/Index/Homeeight'

Vue.use(Router)

export default new Router({
  routes: [
		{
			path:"/",
			redirect:"/home/zero"
		},
    {
      path: '/aaa',
      name: 'Index',
      component: Index
    },
    {
      path:'/goods',
      name:'Goods',
      component:Goods
    },
    {
      path:'/cart',
      name:'Cart',
      component:Cart
    },
    {
      path:'/kinds',
      name:'Kinds',
      component:Kinds
    },
    {
      path:'/my',
      name:'My',
      component:My
    },
    {
      path:'/search',
      name:'Search',
      component:Search
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/login/register',
      name:'Register',
      component:Register
    },
    {
      path:'/home', //嵌套路由
      component:Home,
      children:[
        {
          path:'zero',
          component:swiper
        },
        {
          path:"one",
          component:homeone
        },
        {
          path:"two",
          component:hometwo
        },
        {
          path:"three",
          component:homethree
        },
        {
          path:"four",
          component:homefour
        },
        {
          path:"five",
          component:homefive
        },
        {
          path:"six",
          component:homesix
        },
        {
          path:"seven",
          component:homeseven
        },
        {
          path:"eight",
          component:homeeight
        }
      ]
    }
  ]
})
