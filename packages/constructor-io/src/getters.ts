import { MatchedProduct, SearchResponse, AutocompleteResponse } from './types';

export const getMatchedProducts = (searchData: SearchResponse & AutocompleteResponse): MatchedProduct[] => {
  if (!searchData) return [];

  if (searchData.response) {
    return searchData.response.results.map(r => r.data);
  }

  return searchData.sections.Products.map(p => p.data);
};

export const getFacets = (searchData: SearchResponse): any[] => {
  if (!searchData) return [];

  return searchData.response.facets;
};

const searchGetters = {
  getFacets,
  getMatched: getMatchedProducts
};

export default searchGetters;
