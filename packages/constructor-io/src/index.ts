import { apiClient } from './settings';
import useAutocomplete from './composables/useAutocomplete';
import useSearch from './composables/useSearch';
import searchGetters from './getters';

const { setup, getSettings } = apiClient;

export {
  setup,
  searchGetters,
  getSettings,
  useAutocomplete,
  useSearch
};
