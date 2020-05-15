/* eslint-disable camelcase */

export interface ConstructorIoSettings {
  apiKey: string;
}

export interface SearchParams {
  section?: string;
  page?: number;
  resultsPerPage?: number;
  filters: any;
  sortBy?: string;
  sortOrder?: string;
}

export interface AutocompleteParams {
  section?: string;
  numResults?: number;
  resultsPerSection?: any;
  filters?: any;
  sortOrder?: string;
}

export interface RequestBag {
  term: string;
  page?: number;
  section?: string;
  sort_by?: string;
  sort_order?: string;
  [x: string]: any;
}

export interface MatchedProduct {
  data: any;
  is_slotted: boolean;
  matched_terms: string[];
  value: string;
}

export interface ResponseSections {
  Products?: MatchedProduct[];
  [x: string]: any;
}

export interface AutocompleteResponse {
  result_id: string;
  request: RequestBag;
  sections: ResponseSections;
}

export interface SearchResult {
  facets: any[];
  features: any[];
  groups: MatchedProduct[];
  results: any[];
  sort_options: any[];
  total_num_results: number;
}

export interface SearchResponse {
  result_id: string;
  request: RequestBag;
  response: SearchResult;
}
