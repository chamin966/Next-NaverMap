import useMap from '@/hooks/useMap';
import { NaverMap } from '@/types/naverMap';
import Map from './Map';
import Markers from './Markers';
import useCurrentStore from '@/hooks/useCurrentStore';

const MapSection = () => {
  const { initializeMap } = useMap();
  const { clearCurrentStore } = useCurrentStore();

  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
    naver.maps.Event.addListener(map, 'click', clearCurrentStore);
  };

  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  );
};

export default MapSection;
