import Vue from 'vue'
import Router from 'vue-router'
import Vip from '@/components/home/Vip'
import Login from '@/components/home/Login'
import Down from '@/components/home/DownLoad'
import About from '@/components/home/About'
import Policy from '@/components/home/Policy'
import Rule from '@/components/home/Rule'
import Contact from '@/components/home/Contact'
import Disk from '@/components/admin/Disk'
Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
      	main:Vip
      }
    },
	{
		path:'/vip',
		name :'vip',
		components:{
			main: Vip
		}
	},
	{
		path: '/account',
		name: 'login-register',
		components: {
			main: Login
		}
	},
	{
		path: '/file-:id',
		name: 'vip-down',
		components: {
			main: Down
		}
	},
	{
		path: '/about',
		name: 'about',
		components: {
			main: About
		}
	},
	{
		path: '/policy',
		name: 'policy',
		components: {
			main: Policy
		}
	},
	{
		path: '/rule',
		name: 'rule',
		components: {
			main: Rule
		}
	},
	{
		path: '/contact',
		name: 'contact',
		components: {
			main: Contact
		}
	},
	{
		path : '/dashboard',
		name : 'dashboard',
		components :{
			main : Disk
		},
		meta: { 
			requiresAuth: true 
		}
	},
	{
		path : '/manager',
		name : 'manager',
		components :{
			main : Disk
		},
		meta: { 
			requiresAuth: true 
		}
	},
	{
		path : '/upload',
		name : 'upload',
		components :{
			main : Disk
		},
		meta: { 
			requiresAuth: true 
		}
	},
	{
		path : '/exchange',
		name : 'exchange',
		components :{
			main : Disk
		},
		meta: { 
			requiresAuth: true 
		}
	}
  ]
})
