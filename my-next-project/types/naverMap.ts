export type NaverMap = naver.maps.Map;

export const INITIAL_CENTER: number[] = [37.50171487573252, 126.63510863641869];

export const INITIAL_ZOOM = 10;

export const MAP_KEY = '/map';

export type MapMarker = {
  map: NaverMap;
  coordinates: number[];
  icon: ImageIcon;
  onClick?: () => void;
};

export type ImageIcon = {
  url: string;
  size: naver.maps.Size;
  origin: naver.maps.Point;
  scaledSize?: naver.maps.Size;
};
