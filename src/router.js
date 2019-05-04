import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/', name: 'Home', 
//       component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
//       children: [
//         {
//           path: 'about',
//           name: 'About',
//           // route level code-splitting
//           // this generates a separate chunk (about.[hash].js) for this route
//           // which is lazy-loaded when the route is visited.
//           component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//         },
//       ]
//     },

//     /*auth required*/
//     {
//       path: '/account',
//       name: 'Account',
//       component: () => import(/* webpackChunkName: "Account" */ './views/Account.vue'),
//       meta: { requiresAuth: true , method: 'POST' } 
//     }
//   ],

//   routes.beforeEach((to, from, next) => {
//     // to and from are both route objects. must call `next`.
//   }),
// });

const router = new Router({
  mode: 'history',

  routes: [{
    path: '/',
    component: () => import( /* webpackChunkName: "MainLayout" */ './layout/VMain.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import( /* webpackChunkName: "about" */ './views/Home.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
      },
      {
        path: 'band',
        name: 'Band',
        component: () => import( /* webpackChunkName: "about" */ './views/Band.vue')
      },]
  },

  /*auth required*/
  {
    path: '/account',
    name: 'Account',
    component: () => import( /* webpackChunkName: "Account" */ './views/Account.vue'),
    meta: {
      requiresAuth: true,
      method: 'POST'
    }
  }
  ]
});

// router.beforeEach((to, from, next) => {
// let loads = {
//   'user': false
// };

// function onLoad(mode) {
//   loads[mode] = true;
//   // переходим на новую страницу только после загрузки всех данных:
//   if (loads.user) next();
// }

// // 1. требуется ли идентификация пользователя?
// if (to.meta['checkAuth']) {
//   store.dispatch('fetchUser').then(() => {
//     // авторизованы!
//     onLoad('user');
//   }).catch((err) => {
//     console.warn("User is not authed, going to auth...");
//     router.push({
//       name: "Home"
//     });
//   });
// } else onLoad('user');
// });

export default router;