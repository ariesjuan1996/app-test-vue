/*import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
  const routes = [
    {
      path: '/clients',
      name: 'clients',
      component: () => import( '@/components/listClients.vue'),
    },
    {
      path: '/clients',
      name: 'clients',
      component: () => import( '@/components/listClients.vue'),
    }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
router.beforeEach(async(to, from, next) => {
  
  next();
}); 
export default router

*/

import VueRouter from 'vue-router';
let routes=[
  {
    path: '/',
    component: () => import( '@/components/listClients.vue'),
  },
  {
    path: '/query',
    component: () => import( '@/components/listClients.vue')
  }
];

export default new VueRouter({routes});
