import Vue from 'vue'
import Router from 'vue-router'
import M from '@/views/m'
import pc from '@/views/pc'
import admin from '@/views/admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
    	redirect: '/pc/index',
    },
    // pc路由配置
    {
    	path: '/pc',
    	name: 'pc',
    	redirect: '/pc/index',
    	component: M,
    	children: [
    		{
    			path: 'index',
    			name: 'pc_index',
    			component: resolve=> require.ensure([], require=> resolve(require('@/views/pc/index')), 'pc_index')
    		}
    	]
    },
    // 移动端路由配置
    {
    	path: '/m',
    	name: 'm',
    	redirect: '/m/index',
    	component: M,
    	children: [
    		{
    			path: 'index',
    			name: 'm_index',
    			component: resolve=> require.ensure([], require=> resolve(require('@/views/m/index')), 'm_index')
			}
    	]
    },
    // 后台管理 需要验证需要管理登录的
    {
    	path: '/admin',
    	name: 'admin',
    	redirect: '/admin/index',
    	component: admin,
    	meta: {
    		requiresAuth: true // 跳转需要验证后台有没有登录
    	},
    	children: [
    		{
    			path: 'index',
    			name: 'admin_index',
    			meta: {
    				requiresAuth: true
    			},
    			component: resolve=> require.ensure([], require=> resolve(require('@/views/admin/index')), 'admin_index')
    		}
    	]
    }
  ]
})
