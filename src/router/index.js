import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/layout'

const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '@/views/dashboard/base-dashboard'
          ),
        meta: { title: 'Dashboard', icon: 'dashboard' },
      },
    ],
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-help-filled' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () =>
          import(/* webpackChunkName: "example" */ '@/views/table/base-table'),
        meta: { title: 'Table', icon: 'table' },
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () =>
          import(/* webpackChunkName: "example" */ '@/views/tree/base-tree'),
        meta: { title: 'Tree', icon: 'tree' },
      },
    ],
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () =>
          import(/* webpackChunkName: "form" */ '@/views/form/base-form'),
        meta: { title: 'Form', icon: 'form' },
      },
    ],
  },
  {
    path: '/tailwindcss',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Tailwindcss',
        component: () =>
          import(
            /* webpackChunkName: "tailwindcss" */ '@/views/tailwindcss/base-tailwindcss'
          ),
        meta: { title: 'Tailwindcss', icon: 'el-icon-magic-stick' },
      },
    ],
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested',
    },
    children: [
      {
        path: 'menu1',
        component: () =>
          import(
            /* webpackChunkName: "nested" */ '@/views/nested/menu1/base-menu1.vue'
          ),
        name: 'Menu1',
        meta: { title: 'Menu 1' },
        redirect: '/nested/menu1/menu1-1',
        children: [
          {
            path: 'menu1-1',
            component: () =>
              import(
                /* webpackChunkName: "nested" */ '@/views/nested/menu1/menu1-1/base-menu1-1.vue'
              ),
            name: 'Menu1-1',
            meta: { title: 'Menu 1-1' },
          },
          {
            path: 'menu1-2',
            component: () =>
              import(
                /* webpackChunkName: "nested" */ '@/views/nested/menu1/menu1-2/base-menu1-2.vue'
              ),
            name: 'Menu1-2',
            redirect: '/nested/menu1/menu1-2/menu1-2-1',
            meta: { title: 'Menu 1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () =>
                  import(
                    /* webpackChunkName: "nested" */ '@/views/nested/menu1/menu1-2/menu1-2-1/base-menu1-2-1.vue'
                  ),
                name: 'Menu1-2-1',
                meta: { title: 'Menu 1-2-1' },
              },
              {
                path: 'menu1-2-2',
                component: () =>
                  import(
                    /* webpackChunkName: "nested" */ '@/views/nested/menu1/menu1-2/menu1-2-2/base-menu1-2-2.vue'
                  ),
                name: 'Menu1-2-2',
                meta: { title: 'Menu 1-2-2' },
              },
            ],
          },
          {
            path: 'menu1-3',
            component: () =>
              import(
                /* webpackChunkName: "nested" */ '@/views/nested/menu1/menu1-3/base-menu1-3.vue'
              ),
            name: 'Menu1-3',
            meta: { title: 'Menu 1-3' },
          },
        ],
      },
      {
        path: 'menu2',
        name: 'Menu2',
        component: () =>
          import(
            /* webpackChunkName: "nested" */ '@/views/nested/menu2/base-menu2.vue'
          ),
        meta: { title: 'Menu 2' },
      },
    ],
  },

  {
    path: '/external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/HaitaoWang555/vue3-admin-template',
        meta: { title: 'External Link', icon: 'link' },
      },
    ],
  },
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/login/base-login'),
    hidden: true,
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true,
  },
  { path: '/:pathMatch(.*)*', redirect: '/404', hidden: true },
]

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: constantRoutes,
})

export default router

export function resetRouter() {
  const newRouter = createRouter({
    history,
    routes: constantRoutes,
  })
  router.matcher = newRouter.matcher // reset router
}
