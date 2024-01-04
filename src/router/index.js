import Vue from 'vue'
import Router from 'vue-router'
import Vip from '@/components/Vip'
import Login from '@/components/Login'
import Down from '@/components/DownLoad'
import About from '@/components/About'
import Policy from '@/components/Policy'
import Rule from '@/components/Rule'
import Contact from '@/components/Contact'
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
			login: Login
		}
	},
	{
		path: '/down',
		name: 'vip-down',
		components: {
			main: Down
		}
	},
	{
		path: '/about',
		name: 'about',
		components: {
			list: About
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
  ]
})
