const path = require('path');

module.exports = function VueStorefrontCoreDevelopment (options) {  
  const buildDir = this.options.buildDir.replace('.nuxt', '');

  this.extendRoutes(routes => {
    routes.push(
      {
        name: 'home',
        path: '/',
        component: path.resolve(buildDir, 'pages/Home.vue')
      },
      {
        name: 'product',
        path: '/p/:id/:slug/',
        component: path.resolve(buildDir, 'pages/Product.vue')
      },
      {
        name: 'category',
        path: '/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?',
        component: path.resolve(buildDir, 'pages/Category.vue')
      },
      {
        name: 'my-account',
        path: '/my-account/:pageName?',
        component: path.resolve(buildDir, 'pages/MyAccount.vue')
      },
      {
        name: 'checkout',
        path: '/checkout',
        component: path.resolve(buildDir, 'pages/Checkout.vue'),
        children: [
          {
            path: 'personal-details',
            name: 'personal-details',
            component: path.resolve(buildDir, 'pages/Checkout/PersonalDetails.vue')
          },
          {
            path: 'shipping',
            name: 'shipping',
            component: path.resolve(buildDir, 'pages/Checkout/Shipping.vue')
          },
          {
            path: 'payment',
            name: 'payment',
            component: path.resolve(buildDir, 'pages/Checkout/Payment.vue')
          },
          {
            path: 'order-review',
            name: 'order-review',
            component: path.resolve(buildDir, 'pages/Checkout/OrderReview.vue')
          },
          {
            path: 'thank-you',
            name: 'thank-you',
            component: path.resolve(buildDir, 'pages/Checkout/ThankYou.vue')
          }
        ]
      }
    );
  });
}
