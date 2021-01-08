
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      { path: '/', 
        component: () => import('pages/Adoptions.vue'),
        name:'Adoptions'
      },
      { 
        path: '/caring', 
        component: () => import('pages/Caring.vue'), 
        name: 'Caring'
      },
      { 
        path: '/add', 
        component: () => import('pages/Add.vue'),
        name: 'Add'
      },
      { 
        path: '/conversations', 
        component: () => import('pages/Conversations.vue'),
        name: 'Conversations'
      },
      { 
        path: '/profile', 
        component: () => import('pages/Profile.vue'),
        name: 'Profile'
      },
      { 
        path: '/message', 
        component: () => import('pages/Message.vue'),
        name: 'Message'
      },
        { 
        path: '/ad', 
        component: () => import('pages/AdPage.vue'),
        name: 'Ad'
      },
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { 
        path: '/', 
        component: () => import ('pages/Login.vue'),
        name: 'Login'
      }
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
