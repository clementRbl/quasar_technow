
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      
      { path: '/techniciens', component: () => import('pages/Techniciens.vue') },
      { path: '/login', component: () => import('pages/Connexion.vue') },
      { path: '/signup', component: () => import('pages/Inscription.vue') },
      { path: '/demande', component: () => import('pages/DemandeExpress.vue') },
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
