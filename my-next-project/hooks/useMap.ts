import { MAP_KEY, NaverMap } from '@/types/naverMap';
import { useCallback } from 'react';
import useSwr, { mutate } from 'swr';

const useMap = () => {
  const { data: map } = useSwr(MAP_KEY);

  const initializeMap = useCallback((map: NaverMap) => {
    mutate(MAP_KEY, map);
  }, []);

  const getMapOptions = useCallback(() => {
    const mapCenter = map.getCenter();
    const center: number[] = [mapCenter.lat(), mapCenter.lng()];
    const zoom = map.getZoom();

    return { center, zoom };
  }, [map]);

  return {
    initializeMap,
    getMapOptions,
  };
};
export default useMap;
