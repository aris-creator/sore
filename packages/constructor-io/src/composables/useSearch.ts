import { ref, Ref, computed } from '@vue/composition-api';
import { constructorIo } from './../settings';
import { SearchParams, SearchResponse } from './../types';

const useSearch = () => {
  const results: Ref<SearchResponse> = ref([]);
  const loading: Ref<boolean> = ref(false);

  const search = async (phase: string, params?: SearchParams) => {
    loading.value = true;
    results.value = await constructorIo.search.getSearchResults(phase, params);
    loading.value = false;
  };

  return {
    results: computed(() => results.value),
    loading: computed(() => loading.value),
    search
  };
};

export default useSearch;
