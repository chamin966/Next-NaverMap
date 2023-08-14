import { useRouter } from 'next/router';
import { NaverMap } from '@/types/naverMap';
import copy from 'copy-to-clipboard';

const usePath = () => {
  const router = useRouter();

  const setPath = (name: string, nid: number, coordinates: number[]) => {
    router.replace(
      `/?palce=${name}&nid=${nid}&zoom=15&lat=${coordinates[0]}&lng=${coordinates[1]}`
    );
  };

  const resetPath = () => {
    router.replace('/');
  };

  const copyPath = (name: string, nid: number, map: NaverMap) => {
    const latLag = map.getCenter();
    const zoom = map.getZoom();
    copy(`${location.origin}/?palce=${name}&nid=${nid}&zoom=${zoom}&lat=${latLag.y}&lng=${latLag.x}
  `);
    router.replace(`
      /?palce=${name}&nid=${nid}&zoom=${zoom}&lat=${latLag.y}&lng=${latLag.x}
    `);
  };

  const getId = () => {
    if (router.asPath.split('&nid=')[1]) {
      return Number(router.asPath.split('&')[1].slice(4));
    }
    return null;
  };

  return {
    setPath,
    resetPath,
    getId,
    copyPath,
  };
};
export default usePath;
