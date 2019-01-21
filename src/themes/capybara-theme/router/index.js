const Home = () => import(/* webpackChunkName: "vsf-home" */ 'theme/pages/Home.vue')

let routes = [
  { name: 'home', path: '/', component: Home, alias: '/pwa.html' },
  { name: 'page-not-found', path: '/page-not-found', component: Home }
]

export default routes
