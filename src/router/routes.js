
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Adoptions.vue'), },
      { path: '/caring', component: () => import('pages/Caring.vue'), name: 'Caring'},
      { path: '/add', component: () => import('pages/Add.vue')},
      { path: '/conversations', component: () => import('pages/Conversations.vue')},
      { path: '/profile', component: () => import('pages/Profile.vue')}
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '/sign-up', component: () => import ('pages/Login.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
 
]

export default routes
