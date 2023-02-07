export default [
	{
		name: 'home',
		path: '/',
		component: () => import('@/views/Home.vue'),
	},
	{
		name: 'demo1',
		path: '/demo1',
		component: () => import('@/views/demo1'),
	},
	{
		name: 'wechat',
		path: '/wechat',
		component: () => import('@/views/WeChat'),
	},
];
