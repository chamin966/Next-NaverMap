export type NaverMap = naver.maps.Map;

export const INITIAL_CENTER: Number[] = [37.5262411, 126.99289439];

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
