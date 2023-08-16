import MapSection from '@/components/home/MapSection';
import SideBarSection from '@/components/home/SideBarSection';
import useCurrentStore, { CURRENT_STORE_KEY } from '@/hooks/useCurrentStore';
import usePath from '@/hooks/usePath';
import useStores from '@/hooks/useStores';
import { Store } from '@/types/store';
import { NextPage } from 'next';
import { useEffect } from 'react';
import useSwr from 'swr';
import { NextSeo } from 'next-seo';

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
      <NextSeo
        title="매장 지도"
        description="네이버 지도 API를 활용한 Next.js기반의 매장 지도 서비스입니다."
        canonical="https://next-naver-map-chamin966.vercel.app"
      />
      <main>
        <MapSection />
        <SideBarSection />
      </main>
    </>
  );
};
export default Home;

export async function getStaticProps() {
  // 개발 환경에서의 절대 경로 설정 = http://localhost:3000/api/stores
  const stores = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/stores`
  ).then((res) => res.json());

  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
