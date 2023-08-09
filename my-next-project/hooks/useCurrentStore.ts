import { useCallback } from 'react';
import { mutate } from 'swr';
import type { Store } from '../types/store';
import usePath from './usePath';

export const CURRENT_STORE_KEY = '/current-store';

const useCurrentStore = () => {
  const path = usePath();

  const setCurrentStore = useCallback(
    (store: Store) => {
      mutate(CURRENT_STORE_KEY, store);
      path.setPath(store.name, store.nid);
    },
    [path]
  );

  const clearCurrentStore = useCallback(() => {
    mutate(CURRENT_STORE_KEY, null);
    path.resetPath();
  }, [path]);

  return {
    setCurrentStore,
    clearCurrentStore,
  };
};
export default useCurrentStore;
