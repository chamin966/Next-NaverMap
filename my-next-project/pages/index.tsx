import MapSection from '@/components/home/MapSection';
import SideBarSection from '@/components/home/SideBarSection';
import useCurrentStore, { CURRENT_STORE_KEY } from '@/hooks/useCurrentStore';
import usePath from '@/hooks/usePath';
import useStores from '@/hooks/useStores';
import { Store } from '@/types/store';
import { NextPage } from 'next';
import { useEffect } from 'react';
import useSwr from 'swr';

interface Props {
  stores: Store[];
}

const Home: NextPage<Props> = ({ stores }) => {
  const { data: currentStore } = useSwr<Store>(CURRENT_STORE_KEY);
  const { setCurrentStore } = useCurrentStore();
  const { initializeStores } = useStores();
  const path = usePath();
  const nid = path.getId();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  useEffect(() => {
    if (!currentStore && nid) {
      const foundStore = stores.find((store) => store.nid === nid);
      if (foundStore) setCurrentStore(foundStore);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nid]);

  return (
    <>
      <main>
        <MapSection />
        <SideBarSection />
      </main>
    </>
  );
};
export default Home;

export async function getStaticProps() {
  const stores = (await import('../public/stores.json')).default;

  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
