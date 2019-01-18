const Home = () => import(/* webpackChunkName: "vsf-home" */ 'theme/pages/Home.vue')

let routes = [
  { name: 'home', path: '/', component: Home, alias: '/pwa.html' }
]

export default routes
