import { useEffect } from 'react';
import type { MapMarker } from '../../types/naverMap';

const Marker = ({ map, coordinates, icon, onClick }: MapMarker): null => {
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
    }

    return () => {
      marker?.setMap(null);
    };
  }, [map]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
};

export default Marker;
