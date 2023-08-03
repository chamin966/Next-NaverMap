import MapSection from '@/components/home/MapSection';
import SearchSection from '@/components/home/SearchSection';
import useStores from '@/hooks/useStores';
import { Store } from '@/types/store';
import { NextPage } from 'next';
import { useEffect } from 'react';

interface Props {
  stores: Store[];
}

const Home: NextPage<Props> = ({ stores }) => {
  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <>
      <main>
        <MapSection />
        <SearchSection />
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
