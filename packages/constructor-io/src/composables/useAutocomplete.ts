import { ref, Ref, computed } from '@vue/composition-api';
import { constructorIo } from './../settings';
import { AutocompleteParams, AutocompleteResponse } from './../types';

const useAutocomplete = () => {
  const results: Ref<AutocompleteResponse> = ref([]);
  const loading: Ref<boolean> = ref(false);

  const search = async (phase: string, params?: AutocompleteParams) => {
    loading.value = true;
    results.value = await constructorIo.autocomplete.getAutocompleteResults(phase, params);
    loading.value = false;
  };

  return {
    results: computed(() => results.value),
    loading: computed(() => loading.value),
    search
  };
};

export default useAutocomplete;
