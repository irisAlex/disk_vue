import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/components/PostList'
import Article from '@/components/Article'
import SideBar from '@/components/SideBar'
import UserInfo from '@/components/UserInfo'
import Vip from '@/components/Vip'
import Home from '@/components/Home'
import Announce from '@/components/Announce'
import Login from '@/components/Login'
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
    	path:'/about',
    	name:'post_content',
    	components:{
    		main:Article
    	},
    },
    {
    	path:'/user/:name',
    	name:'user_info',
    	components:{
    		main:UserInfo,
    	}
    },
	{
		path: '/announce',
		name: 'an',
		components:{
			main: Announce
		}
	},
	{
		path: '/account',
		name: 'login-register',
		components: {
			main: Login
		}
	}
  ]
})
