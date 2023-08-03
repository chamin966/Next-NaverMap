import { MAP_KEY, NaverMap } from '@/types/naverMap';
import { useCallback } from 'react';
import { mutate } from 'swr';

const useMap = () => {
  const initializeMap = useCallback((map: NaverMap) => {
    mutate(MAP_KEY, map);
  }, []);

  return {
    initializeMap,
  };
};
export default useMap;
