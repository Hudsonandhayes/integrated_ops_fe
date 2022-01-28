import localdate from './localdate';
import title from './title';

export default {
	install(Vue) {
		Vue.filter('localdate', localdate);
		Vue.filter('title', title);
	},
};
