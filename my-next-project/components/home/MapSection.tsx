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
    // 맵에 클릭이 일어나면 현재 선택된 마커 삭제
    naver.maps.Event.addListener(map, 'click', clearCurrentStore);
  };

  return (
    <>
      <Map onLoadMap={onLoadMap} />
      <Markers />
    </>
  );
};

export default MapSection;
