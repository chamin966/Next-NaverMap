import { useCallback } from 'react';
import { mutate } from 'swr';
import type { Store } from '../types/store';

export const SEARCHED_STORE_KEY = '/searched-store';

const useSearchedStore = () => {
  const setSearchedStore = useCallback((store: Store) => {
    mutate(SEARCHED_STORE_KEY, store);
  }, []);

  const clearSearchedStore = useCallback(() => {
    mutate(SEARCHED_STORE_KEY, null);
  }, []);

  return {
    setSearchedStore,
    clearSearchedStore,
  };
};
export default useSearchedStore;
