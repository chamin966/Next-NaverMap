import { INITIAL_CENTER, INITIAL_ZOOM, NaverMap } from '../../types/naverMap';
import { useEffect, useRef } from 'react';
import Script from 'next/script';

type Props = {
  onLoadMap?: (map: NaverMap) => void;
};

function Map({ onLoadMap }: Props) {
  const mapRef = useRef<NaverMap | null>(null);
  const mapId = 'map';

  const landingMap = () => {
    const mapOptions = {
      center: new naver.maps.LatLng(INITIAL_CENTER[0], INITIAL_CENTER[1]),
      zoom: INITIAL_ZOOM,
      minZoom: 9,
      scaleControl: false,
      mapDataControl: false,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_RIGHT,
      },
    };

    const map = new naver.maps.Map(mapId, mapOptions);
    mapRef.current = map;

    if (onLoadMap) {
      onLoadMap(map);
    }
  };

  useEffect(() => {
    mapRef.current?.destroy();
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
        onReady={landingMap}
      />
      <div id={mapId} style={{ width: '100%', height: '100vh' }} />
    </>
  );
}

export default Map;
