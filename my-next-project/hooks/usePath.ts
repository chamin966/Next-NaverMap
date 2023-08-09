import { useRouter } from 'next/router';
import useMap from './useMap';

const usePath = () => {
  const router = useRouter();
  const { getMapOptions } = useMap();

  const setPath = (name: string, nid: number) => {
    router.push(`/?palce=${name}&nid=${nid}`);
  };

  const resetPath = () => {
    router.push('/');
  };

  const copyPath = (name: string, nid: number) => {
    const [lat, lng] = getMapOptions().center;
    const zoom = getMapOptions().zoom;
    router.push(`
      /?palce=${name}&nid=${nid}&zoom=${zoom}&lat=${lat}&lng=${lng}
    `);
  };

  const getId = () => {
    return Number(router.asPath.split('nid=')[1]);
  };

  return {
    setPath,
    resetPath,
    getId,
    copyPath,
  };
};
export default usePath;
