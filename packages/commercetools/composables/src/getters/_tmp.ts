import { customRef, watchEffect, computed } from '@vue/composition-api';
import productGetters from './productGetters';

const gettersToProperties = {
  id: productGetters.getId,
  name: productGetters.getName,
  description: productGetters.getDescription,
  slug: productGetters.getSlug,
  price: productGetters.getPrice,
  priceFormatted: productGetters.getFormattedPrice,
  imageGallery: productGetters.getProductGallery,
  imageCover: productGetters.getProductCoverImage,
  attributes: productGetters.getAttributes,
  categories: productGetters.getCategoryIds
};

const rawProducts = [{
  _name: 'productname1',
  _slug: 'productslug1'
}, {
  _name: 'productname2',
  _slug: 'productslug2'
}];

// --------------------------------------------- GENERIC FACTORY  ---------------------------------------------//

function createProxyGetters(products, getters) {
  function proxify(data) {
    return new Proxy(data, {
      get: (target, property) => getters[property]?.(target)
    });
  }

  let currentValue = products.map(product => proxify(product));

  return customRef((track, trigger) => ({
    get() {
      track();
      return currentValue;
    },
    set(newValue: any) {
      currentValue = newValue.map(product => proxify(product));

      trigger();
    }
  }));
}

// --------------------------------------------- USAGE  ---------------------------------------------//

const productsRef = (product) => createProxyGetters(product, gettersToProperties);
const products: any = productsRef(rawProducts);
console.log(products.value[0].name);

// ---------------------- OVERRIDING DATA (without calling factory again)  ----------------------//

const test = computed(() => products.value[0].name);
watchEffect(() => console.log(test.value));

const newDataSet = [{
  _name: '2productname1',
  _slug: '2productslug1'
}, {
  _name: '2productname2',
  _slug: '2productslug2'
}];

products.value = newDataSet;
