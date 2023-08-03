import useMap from '@/hooks/useMap';
import { NaverMap } from '@/types/naverMap';
import Map from './Map';
import Markers from './Markers';

const MapSection = () => {
  const { initializeMap } = useMap();
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
  };

  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  );
};
export default MapSection;
