import React from 'react';
import useSwr from 'swr';
import { MAP_KEY } from '../../types/naverMap';
import { STORE_KEY } from '../../hooks/useStores';
import type { ImageIcon, NaverMap } from '../../types/naverMap';
import type { Store } from '../../types/store';
import Marker from './Marker';
import useCurrentStore, { CURRENT_STORE_KEY } from '@/hooks/useCurrentStore';
import useSearchedStore from '@/hooks/useSearchedStore';

const MARKER_HEIGHT = 64;
const MARKER_WIDTH = 54;
const NUMBER_OF_MARKER = 13;
const SCALE = 2 / 3;

const SCALED_MARKER_WIDTH = MARKER_WIDTH * SCALE;
const SCALED_MARKER_HEIGHT = MARKER_HEIGHT * SCALE;

export function generateStoreMarkerIcon(
  markerIndex: number,
  isSelected: boolean
): ImageIcon {
  /** https://navermaps.github.io/maps.js.ncp/docs/tutorial-8-marker-retina-sprite.example.html */
  return {
    url: isSelected ? 'images/markers-selected.png' : 'images/markers.png',
    size: new naver.maps.Size(SCALED_MARKER_WIDTH, SCALED_MARKER_HEIGHT),
    origin: new naver.maps.Point(SCALED_MARKER_WIDTH * markerIndex, 0),
    scaledSize: new naver.maps.Size(
      SCALED_MARKER_WIDTH * NUMBER_OF_MARKER,
      SCALED_MARKER_HEIGHT
    ),
  };
}

const Markers = () => {
  const { data: map } = useSwr<NaverMap>(MAP_KEY);
  const { data: stores } = useSwr<Store[]>(STORE_KEY);

  const { data: currentStore } = useSwr<Store>(CURRENT_STORE_KEY);
  const { setCurrentStore, clearCurrentStore } = useCurrentStore();

  const { clearSearchedStore } = useSearchedStore();

  if (!map || !stores) return null;
  return (
    <>
      {stores.map((store) => {
        return (
          <Marker
            map={map}
            coordinates={store.coordinates}
            icon={generateStoreMarkerIcon(store.season, false)}
            key={store.nid}
            onClick={() => {
              setCurrentStore(store);
              clearSearchedStore();
            }}
          />
        );
      })}
      {currentStore && (
        <Marker
          map={map}
          coordinates={currentStore.coordinates}
          icon={generateStoreMarkerIcon(currentStore.season, true)}
          onClick={() => {
            clearCurrentStore();
            clearSearchedStore();
          }}
          key={currentStore.nid}
        />
      )}
    </>
  );
};
export default Markers;
