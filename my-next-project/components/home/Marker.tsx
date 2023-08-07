import { useEffect } from 'react';
import type { MapMarker } from '../../types/naverMap';
import useSwr from 'swr';
import useSearchedStore, { SEARCHED_STORE_KEY } from '@/hooks/useSearchedStore';
import { Store } from '@/types/store';

const Marker = ({ map, coordinates, icon, onClick }: MapMarker): null => {
  const { data: searchedStore } = useSwr<Store>(SEARCHED_STORE_KEY);
  const { clearSearchedStore } = useSearchedStore();

  useEffect(() => {
    let marker: naver.maps.Marker | null = null;

    if (map) {
      marker = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(coordinates[0], coordinates[1]),
        icon,
      });
    }

    if (onClick) {
      naver.maps.Event.addListener(marker, 'click', onClick);
      if (searchedStore) clearSearchedStore();
    }

    return () => {
      marker?.setMap(null);
    };
  }, [map]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
};

export default Marker;
