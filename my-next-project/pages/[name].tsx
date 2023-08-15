import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { Store } from '../types/store';
import useCurrentStore from '@/hooks/useCurrentStore';
import Home from '.';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import usePath from '@/hooks/usePath';

interface Props {
  store: Store;
}

const StoreDetail: NextPage<Props> = ({ store }) => {
  const { setCurrentStore } = useCurrentStore();

  useEffect(() => {
    console.log(store.coordinates);
    setCurrentStore(store);
  });

  return <></>;
};
export default StoreDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const stores = (await import('../public/stores.json')).default;
  const paths = stores.map((store) => ({ params: { name: store.name } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stores = (await import('../public/stores.json')).default;
  const store = stores.find((store) => store.name === params?.name);

  return { props: { store } };
};
