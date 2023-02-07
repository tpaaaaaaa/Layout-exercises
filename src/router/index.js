import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

import routes from './routes';

const router = new VueRouter({
	routes,
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch((err) => err);
};

export default router;
