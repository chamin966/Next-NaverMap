export type NaverMap = naver.maps.Map;

type Lat = number;
type Lng = number;
export type Coordinates = [Lat, Lng];

export const INITIAL_CENTER: Coordinates = [37.5262411, 126.99289439];

export const INITIAL_ZOOM = 10;

export const MAP_KEY = '/map';

export type Marker = {
  map: NaverMap;
  coordinates: Coordinates;
  icon: ImageIcon;
  onClick?: () => void;
};

export type ImageIcon = {
  url: string;
  size: naver.maps.Size;
  origin: naver.maps.Point;
  scaledSize?: naver.maps.Size;
};
