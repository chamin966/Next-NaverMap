import { STORE_KEY } from '@/hooks/useStores';
import { Store } from '@/types/store';
import styles from '../../styles/sideBar.module.scss';
import useSwr from 'swr';
import PeekStore from './PeekStore';
import { SEARCHED_STORE_KEY } from '@/hooks/useSearchedStore';

type Props = {
  searchedStoreName: string;
};

function StoresSection() {
  const { data: allStore } = useSwr<Store[]>(STORE_KEY);
  const { data: searchedStore } = useSwr<Store>(SEARCHED_STORE_KEY);

  return (
    <div className={styles.StoresContainer}>
      {searchedStore ? (
        <PeekStore storeInfo={searchedStore} />
      ) : (
        allStore?.map((store) => (
          <PeekStore key={store.nid} storeInfo={store} />
        ))
      )}
    </div>
  );
}

export default StoresSection;
