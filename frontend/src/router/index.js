import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login';
import Register from '@/views/Register';
import Dashboard from '@/views/Dashboard';
import NotFound from '@/views/404';

Vue.use(VueRouter)

const routes = [
  	{
		path: '/',
		name: 'Login',
		component: Login,
  	},
  	{
		path: '/register',
		name: 'Register',
		component: Register,
  	},
  	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard
  	},
 	{
		path: '/*',
		name: 'NotFOund',
		component: NotFound
  	},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
