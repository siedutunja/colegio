import Vue from 'vue'
import Router from 'vue-router'
import autenticar from "@/auth/autenticar.js";


Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    // 2022-07-19
    {
      path: "*",
      component: () => import('@/views/pages/Extraviada')
    },
    {
      path: '/',
      redirect: '/inicio',
      name: 'Inicio',
      component: () => import('@/containers/TheContainer'),
      children: [
        // 2022-07-19
        {
          path: 'inicio',
          //beforeEnter: autenticar,
          component: () => import('@/views/Inicio')
        },
        // 2022-07-19
        {
          path: 'perfil',
          beforeEnter: autenticar,
          name: 'Perfil del Usuario',
          component: () => import('@/views/perfiles/Perfil')
        },
        // 2022-07-19
        {
          path: 'restringida',
          component: () => import('@/views/pages/Restringida')
        },    
      ]
    }
  ]
}

