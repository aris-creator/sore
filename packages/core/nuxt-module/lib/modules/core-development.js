const path = require('path');

module.exports = function VueStorefrontCoreDevelopment (options) {
  const rootDirectory = options.coreDevelopment
    ? this.options.buildDir.replace('.nuxt', '_theme')
    : this.options.buildDir;

  if (options.coreDevelopment) {
    const mappedDirs = Object
      .entries(this.options.dir)
      .map(([ dir, path ]) => [ dir, `_theme/${path}` ]);

    this.options.dir = Object.fromEntries(mappedDirs);

    this.extendBuild(config => {
      config.resolve.alias['~'] = rootDirectory;
      config.resolve.alias['~~'] = rootDirectory;
      config.resolve.alias['@'] = rootDirectory;
      config.resolve.alias['@@'] = rootDirectory;
      config.resolve.alias['assets'] = path.resolve(rootDirectory, 'assets');
      config.resolve.alias['static'] = path.resolve(rootDirectory, 'static');
    });
  }
  
  this.extendRoutes(routes => {
    routes.push(
      {
        name: 'home',
        path: '/',
        component: path.resolve(rootDirectory, 'pages/Home.vue')
      },
      {
        name: 'product',
        path: '/p/:id/:slug/',
        component: path.resolve(rootDirectory, 'pages/Product.vue')
      },
      {
        name: 'category',
        path: '/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?',
        component: path.resolve(rootDirectory, 'pages/Category.vue')
      },
      {
        name: 'my-account',
        path: '/my-account/:pageName?',
        component: path.resolve(rootDirectory, 'pages/MyAccount.vue')
      },
      {
        name: 'checkout',
        path: '/checkout',
        component: path.resolve(rootDirectory, 'pages/Checkout.vue'),
        children: [
          {
            path: 'personal-details',
            name: 'personal-details',
            component: path.resolve(rootDirectory, 'pages/Checkout/PersonalDetails.vue')
          },
          {
            path: 'shipping',
            name: 'shipping',
            component: path.resolve(rootDirectory, 'pages/Checkout/Shipping.vue')
          },
          {
            path: 'payment',
            name: 'payment',
            component: path.resolve(rootDirectory, 'pages/Checkout/Payment.vue')
          },
          {
            path: 'order-review',
            name: 'order-review',
            component: path.resolve(rootDirectory, 'pages/Checkout/OrderReview.vue')
          },
          {
            path: 'thank-you',
            name: 'thank-you',
            component: path.resolve(rootDirectory, 'pages/Checkout/ThankYou.vue')
          }
        ]
      }
    );
  });
}
