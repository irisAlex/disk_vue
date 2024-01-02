import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
import Vip from '@/components/Vip'
import Announce from '@/components/Announce'
import Login from '@/components/Login'
Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'root',
    //   components: {
    //   	main:Vip
    //   }
    // },
	{
		path:'/vip',
		name :'vip',
		components:{
			main: Vip
		}
	},
    {
    	path:'/about',
    	name:'post_content',
    	components:{
    		list:Article
    	},
    },
	{
		path: '/announce',
		name: 'an',
		components:{
			list: Announce
		}
	},
	{
		path: '/account',
		name: 'login-register',
		components: {
			login: Login
		}
	}
  ]
})
