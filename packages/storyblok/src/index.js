
module.exports = function VueStorefrontStoryblok() {
  this.addModule(['storyblok-nuxt', {
    accessToken: 'U9TdtatDvpaPFwHne22HAAtt',
    cacheProvider: 'memory'
  }]);
};

module.exports.meta = require('../package.json');
