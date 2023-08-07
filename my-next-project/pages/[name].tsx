import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { Store } from '../types/store';
import DetailSection from '@/components/home/DetailSection';

interface Props {
  store: Store;
}

const StoreDetail: NextPage<Props> = ({ store }) => {
  console.log(store);
  return <div>{store.name}</div>;
};
export default StoreDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const stores = (await import('../public/stores.json')).default;
  const paths = stores.map((store) => ({ params: { name: store.name } }));

  console.log('패스', paths);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stores = (await import('../public/stores.json')).default;
  const store = stores.find((store) => store.name === params?.name);

  console.log('파람: ', params);

  return { props: { store } };
};
