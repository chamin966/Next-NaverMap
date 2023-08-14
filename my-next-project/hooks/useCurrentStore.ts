import { useCallback } from 'react';
import { mutate } from 'swr';
import type { Store } from '../types/store';
import usePath from './usePath';
import { MAP_KEY } from '@/types/naverMap';
import useSwr from 'swr';

export const CURRENT_STORE_KEY = '/current-store';

const useCurrentStore = () => {
  const { data: map } = useSwr(MAP_KEY);
  const { setPath, resetPath } = usePath();

  const setCurrentStore = useCallback(
    (store: Store) => {
      mutate(CURRENT_STORE_KEY, store);
      setPath(store.name, store.nid, store.coordinates);
      if (map) {
        const newPos = new naver.maps.LatLng(
          store.coordinates[0],
          store.coordinates[1] - 200 / 2 ** map.getZoom()
        );
        map.panTo(newPos);
      }
    },
    [setPath, map]
  );

  const clearCurrentStore = useCallback(() => {
    mutate(CURRENT_STORE_KEY, null);
    resetPath();
  }, [resetPath]);

  return {
    setCurrentStore,
    clearCurrentStore,
  };
};
export default useCurrentStore;
