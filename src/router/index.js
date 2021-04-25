import {
	createRouter,
	createWebHistory
} from 'vue-router'

const Home = () => import('../views/home/Home')
const Categroy = () => import('../views/categroy/Categroy')
const Profile = () => import('../views/profile/Profile')
const Shopcart = () => import('../views/shopcart/Shopcart')

// 配置映射关系
const routes = [{
		path: '',
		redirect: '/home'
	}, {
		path: '/home',
		component: Home
	},
	{
		path: '/categroy',
		component: Categroy
	},
	{
		path: '/shopcart',
		component: Shopcart
	},
	{
		path: '/profile',
		component: Profile
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	// mode: 'history'
})

export default router
