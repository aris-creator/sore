# Constructor.io integration

## Installation

With Yarn:
```bash
yarn add @vue-storefront/constructor-io
```

## Setup library

### 1. setup
```typescript
import { setup } from '@vue-storefront/constructor-io'

setup({
  apiKey: '[YOUR API KEY]'
});
```

## Nuxt support
Create a plugin that will contain configuration for constructor instance:

```js
import { setup } from '@vue-storefront/constructor-io';

export default () => {
  setup({ apiKey: '[YOUR API KEY' });
};

```

## Example usage

### Autocomplete

```js
import { computed } from '@vue/composition-api';
import { useAutocomplete, searchGetters } from '@vue-storefront/constructor-io';

export default {
  setup() {
    const { search, results, loading } = useAutocomplete();
    const autocompleteProducts = computed(() => searchGetters.getMatched(results.value));

    const handleSearchInput = (phase) => {
      search(phase)
    }

    return {
      handleSearchInput,
      autocompleteProducts,
      loading
    };
  }
};
```

### Search

```js
import { computed } from '@vue/composition-api';
import { useSearch, searchGetters } from '@vue-storefront/constructor-io';

export default {
  setup() {
    const { search, results, loading } = useSearch();
    const matchedProducts = computed(() => searchGetters.getMatched(results.value));
    const facets = computed(() => searchGetters.getFacets(results.value));

    const handleSearchInput = (phase) => {
      search(phase)
    }

    return {
      handleSearchInput,
      matchedProducts,
      facets,
      loading
    };
  }
};
```
